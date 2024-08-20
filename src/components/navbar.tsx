import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="bg-primary dark:bg-black py-3 items-center px-7 flex justify-between text-white">
      <Link href="/">
        <Image
          src="/react-tailwind.png"
          width={50}
          height={50}
          alt="branding"
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className=" outline-none focus:outline-none">
          {" "}
          <Avatar className="outline-none focus:outline-none">
            <AvatarImage src="/sayed.jpg" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
