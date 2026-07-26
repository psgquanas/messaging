import { AppSidebar } from "@/components/layout/app-sidebar";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-muted/40">
        <AppSidebar />

        <main className="my-2 mr-2 flex min-w-0 flex-1 flex-col overflow-hidden rounded-tl-2xl border-l bg-background shadow-sm md:my-2 md:mr-2 md:border-none">
          <SiteHeader />
          <div className="flex flex-1 overflow-hidden">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
