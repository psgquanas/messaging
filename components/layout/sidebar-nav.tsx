import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { dashboardNavItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  return (
    <div>
      <h3 className="mb-3 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Menu
      </h3>
      <nav className="space-y-1">
        {dashboardNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "group flex items-center justify-between rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors",
              "hover:bg-muted hover:text-foreground"
            )}
          >
            <span className="flex items-center gap-3">
              <item.icon className="size-4 shrink-0 text-muted-foreground/70 group-hover:text-foreground" />
              <span>{item.label}</span>
            </span>
            {item.hasChildren && (
              <ChevronRight className="size-3 text-muted-foreground/50" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
