import Sidebar from "@/components/sidebar";
import Nav from "@/components/nav";
import Preview from "@/components/preview";
import IconPicker from "@/components/icon-picker";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Nav />
      <div className="h-full w-full flex">
        <Sidebar />
        <div className="w-full h-full">
          <main className="p-4 flex gap-4 w-full h-full">
            <div className="flex flex-col gap-6">
              <IconPicker />
            </div>
            <Preview />
          </main>
        </div>
      </div>
    </div>
  );
}
