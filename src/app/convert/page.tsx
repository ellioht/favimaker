"use client";

import Nav from "@/components/nav";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [conversionType, setConversionType] = useState<string>("png-to-ico");
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      alert("Please upload a file.");
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    setIsConverting(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("conversionType", conversionType);

    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    setIsConverting(false);

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = conversionType === "png-to-ico" ? "converted.ico" : "converted.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } else {
      const errorText = await response.text();
      alert(`Conversion failed: ${errorText}`);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-auto">
      <Nav />
      <div className="h-full w-full flex overflow-auto">
        <Sidebar />
        <div className="w-full flex items-center justify-center">
          <div className="container flex flex-col gap-4 items-center justify-center">
            <h1 className="text-4xl font-bold">Convert Image</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="img-input">Select Image: </Label>
                <Input id="img-input" type="file" accept=".png,.ico" onChange={handleChangeImage} />
              </div>
              <div>
                <Label>Conversion Type: </Label>
                <Select value={conversionType} onValueChange={(v) => setConversionType(v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Type" className="truncate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Type</SelectLabel>
                      <SelectItem value="png-to-ico">PNG to ICO</SelectItem>
                      <SelectItem value="ico-to-png">ICO to PNG</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={isConverting}>
                {isConverting ? "Converting..." : "Convert"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
