"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/server" ? "sky" : "ghost"}>
          <Link href="/server">Server</Link>
        </Button>
        <Button asChild variant={pathname === "/client" ? "sky" : "ghost"}>
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "sky" : "ghost"}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "sky" : "ghost"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
