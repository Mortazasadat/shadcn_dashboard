import { ModeToggle } from "@/components/mode-toggle";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative ">
      {children}
      <div className="fixed right-8 bottom-8">
        <ModeToggle />
      </div>
    </div>
  );
}

export default AuthLayout;
