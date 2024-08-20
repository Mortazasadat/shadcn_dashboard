import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-0 z-10 min-w-full">
        <Navbar />
      </div>
      <div className="flex mt-16 relative ">
        <div className="hidden lg:block lg:w-[250px] md:fixed">
          <Sidebar />
        </div>

        <div className="w-full lg:ml-[250px]  p-5 lg:w-full dark:bg-gray-900 bg-slate-50">
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
