import Sidebar from "@/components/sidebar";
import Nav from "@/components/nav";
import Preview from "@/components/preview";
import IconControls from "@/components/icon-controls";
import BackgroundControls from "@/components/background-controls";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TextControls from "@/components/text-controls";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col overflow-auto">
      <Nav />
      <div className="h-full w-full flex overflow-auto">
        <Sidebar />
        <div className="flex lg:flex-row flex-col-reverse gap-1 w-full lg:h-full h-auto">
          <ScrollArea className="lg:w-1/6 w-full h-full lg:pt-4 pt-0 pl-4 pr-4 lg:pr-3">
            <ScrollBar orientation="vertical" />
            <div className="flex flex-col gap-4 pb-4">
              <IconControls />
              <TextControls />
              <BackgroundControls />
            </div>
          </ScrollArea>
          <div className="pl-4 lg:pl-0 pr-4 pt-4 pb-0 lg:pb-4 w-full">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}
