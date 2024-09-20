import Sidebar from "@/components/sidebar";
import Nav from "@/components/nav";
import Preview from "@/components/preview";
import IconControls from "@/components/icon-controls";
import BackgroundControls from "@/components/background-controls";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Nav />
      <div className="h-full w-full flex">
        <Sidebar />
        <div className="w-full h-full">
          <main className="p-4 flex lg:flex-row flex-col-reverse gap-4 w-full h-full">
            <div className="flex flex-col gap-6 lg:w-1/6 w-full">
              <IconControls />
              <BackgroundControls />
            </div>
            <Preview />
          </main>
        </div>
      </div>
    </div>
  );
}
