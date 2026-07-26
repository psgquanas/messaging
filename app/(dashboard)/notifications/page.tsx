import { Bell, MessageSquare, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    icon: MessageSquare,
    title: "New message from Maya",
    description: "Maya confirmed dinner for tonight.",
    time: "4 min ago",
    unread: true,
  },
  {
    icon: ShieldCheck,
    title: "New trusted device approved",
    description: "A desktop browser was added to your trusted devices.",
    time: "28 min ago",
    unread: true,
  },
  {
    icon: Bell,
    title: "Daily digest is ready",
    description: "Three chats have unread messages waiting for you.",
    time: "Today",
    unread: false,
  },
];

export default function NotificationsPage() {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Notifications
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Alerts
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Message, security, and account updates from CipherChat.
          </p>
        </div>
        <Button variant="outline">Mark all read</Button>
      </div>

      <div className="divide-y rounded-xl border bg-card">
        {notifications.map((item) => (
          <div key={item.title} className="flex gap-4 p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <item.icon className="size-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-sm font-semibold">{item.title}</h2>
                {item.unread && <Badge>New</Badge>}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
