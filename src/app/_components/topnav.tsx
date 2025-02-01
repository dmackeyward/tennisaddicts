"use client";

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import SimpleUploadButton from "./simple-upload-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      {/* Left Items */}
      <div>Tennis Addicts</div>

      {/* Left Items */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Left Items */}
      <div className="flex flex-row items-center gap-4">
        Hello
        {/* <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <SimpleUploadButton />
                    <UserButton />
                </SignedIn> */}
      </div>
    </nav>
  );
}
