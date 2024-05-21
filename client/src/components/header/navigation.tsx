import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarFoldIcon, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const user = {
    username: "John Doe",
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="sm:gap-4 lg:gap-2">
        {user ? (
          <DropdownMenu onOpenChange={toggleDropdown} open={isDropdownOpen}>
            <DropdownMenuTrigger
              className={cn("flex gap-2 items-center", buttonVariants())}
            >
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" /> <p> Profile</p> <span>&darr;</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="sm:ml-9 mt-1 mr-2">
              <DropdownMenuLabel className="text-base">
                {user.username}'s account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
                <Link
                  onClick={toggleDropdown}
                  to="/account-settings"
                  className="flex gap-2 items-center"
                >
                  <Settings /> Account Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
                <Link
                  onClick={toggleDropdown}
                  to="/my-events"
                  className="flex gap-2 items-center"
                >
                  <CalendarFoldIcon /> My Events
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
                <LogOut /> Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <NavigationMenuLink
              className={cn(buttonVariants({ variant: "default" }))}
              key="/login"
              href="/login"
            >
              Login
            </NavigationMenuLink>
            <NavigationMenuLink
              className={cn(buttonVariants({ variant: "ghost" }))}
              key="/register"
              href="/register"
            >
              Register
            </NavigationMenuLink>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
