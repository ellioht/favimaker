import { NextResponse } from "next/server";
import sharp from "sharp";
import pngToIco from "png-to-ico";
import ico from "icojs";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const conversionType = formData.get("conversionType");

    if (!file || !conversionType) {
      return new NextResponse("Missing file or conversion type", { status: 400 });
    }

    if (!(file instanceof File)) {
      throw new Error("Invalid file type");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let convertedBuffer;

    if (conversionType === "png-to-ico") {
      const sizes = [16, 24, 32, 48, 64, 128, 256];
      const resizedBuffers = await Promise.all(
        sizes.map((size) => sharp(buffer).resize(size, size).png().toBuffer())
      );

      convertedBuffer = await pngToIco(resizedBuffers);

      return new NextResponse(convertedBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/x-icon",
          "Content-Disposition": 'attachment; filename="converted.ico"',
        },
      });
    } else if (conversionType === "ico-to-png") {
      const images = await ico.parseICO(buffer);

      if (images.length === 0) {
        return new NextResponse("No images found in ICO file", { status: 400 });
      }

      let largestImage = images[0];
      for (const image of images) {
        if (image.width > largestImage.width) {
          largestImage = image;
        }
      }

      convertedBuffer = Buffer.from(largestImage.buffer);

      return new NextResponse(convertedBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": 'attachment; filename="converted.png"',
        },
      });
    } else {
      return new NextResponse("Invalid conversion type", { status: 400 });
    }
  } catch (error) {
    console.error("Conversion Error:", error);
    return new NextResponse("Error processing the image", { status: 500 });
  }
}
