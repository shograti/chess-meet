import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "../ui/button";

export const Navigation = () => {
  const user = false;

  const navigationLinks = {
    visitor: [
      { href: "/login", children: <Button>Login</Button> },
      {
        href: "/register",
        children: <Button variant="ghost">Register</Button>,
      },
    ],
    user: [
      { href: "/profile", children: "Profile" },
      { href: "/logout", children: "Logout" },
    ],
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        {user
          ? navigationLinks.user.map(({ href, children }) => (
              <NavigationMenuLink key={href} href={href}>
                {children}
              </NavigationMenuLink>
            ))
          : navigationLinks.visitor.map(({ href, children }) => (
              <NavigationMenuLink key={href} href={href}>
                {children}
              </NavigationMenuLink>
            ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
