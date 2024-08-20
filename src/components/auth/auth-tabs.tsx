import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}

export default AuthTabs;
