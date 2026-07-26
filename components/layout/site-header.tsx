import { Bell, LockKeyhole, Search, ShieldCheck } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  return (
    <header className="z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="flex flex-1 items-center gap-4">
        <SidebarTrigger className="-ml-2" />

        <div className="hidden w-full max-w-md items-center gap-3 rounded-lg border bg-muted/40 px-3 py-1.5 text-muted-foreground transition-shadow focus-within:border-ring focus-within:ring-1 focus-within:ring-ring sm:flex">
          <LockKeyhole className="size-4 text-primary" />
          <Separator orientation="vertical" className="h-4" />
          <Search className="size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search chats or people..."
            className="flex-1 border-none bg-transparent p-0 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <div className="flex items-center gap-1 rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground shadow-sm">
            <span>Ctrl</span>
            <span>K</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <a
          href="#"
          className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:block"
        >
          Privacy report
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button variant="ghost" size="icon" className="relative size-8 rounded-full text-muted-foreground">
            <Bell className="size-4" />
            <span className="absolute right-1 top-1 size-2 rounded-full border-2 border-background bg-red-500" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden size-8 rounded-full text-muted-foreground sm:flex">
            <ShieldCheck className="size-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="mx-1 hidden h-6 sm:block" />

        <button aria-label="Open user menu">
          <Avatar className="size-8">
            <AvatarImage alt="CipherChat profile avatar" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  );
}
