import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  LayoutDashboard,
  Newspaper,
  Folders,
  Settings,
  User,
  CreditCardIcon,
} from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className=" ">
      <Command className="rounded-none w-full   ">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/">Dashboard</Link>
            </CommandItem>
            <CommandItem>
              {" "}
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/posts">Post</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="#">Catagories</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              {" "}
              <User className="mr-2 h-4 w-4" />
              <Link href="#" className="-mb-1">
                Profile
              </Link>
              <CommandShortcut>ctr+P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCardIcon className="mr-2 h-4 w-4" />
              <Link href="#" className="-mb-1">
                Billing
              </Link>
              <CommandShortcut>ctr+B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <Link href="#" className="-mb-1">
                Settings
              </Link>
              <CommandShortcut>ctr+S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default Sidebar;
