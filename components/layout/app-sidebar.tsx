"use client";

import { ChevronDown, LockKeyhole } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { UserMenu } from "@/components/layout/user-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <aside
      className={cn(
        "hidden shrink-0 flex-col border-r bg-background transition-[width] duration-300 md:flex overflow-hidden",
        state === "expanded" ? "w-64" : "w-0 border-none"
      )}
    >
      <div className="flex w-64 flex-col h-full">
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <button className="flex items-center gap-3">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <LockKeyhole className="size-3.5" />
          </div>
          <span className="text-lg font-semibold">CipherChat</span>
          <ChevronDown className="ml-1 size-3 text-muted-foreground" />
        </button>
      </div>

      <ScrollArea className="flex-1 px-4 py-4">
        <SidebarNav />
      </ScrollArea>

      <UserMenu
        name="Your account"
        email="you@cipherchat.app"
      />
      </div>
    </aside>
  );
}
