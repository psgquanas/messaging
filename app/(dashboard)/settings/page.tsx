import { Bell, KeyRound, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const settings = [
  {
    icon: ShieldCheck,
    title: "Privacy alerts",
    description: "Notify me when an account security setting changes.",
    enabled: true,
  },
  {
    icon: KeyRound,
    title: "Device approvals",
    description: "Require approval before a new device can access my messages.",
    enabled: true,
  },
  {
    icon: Bell,
    title: "Message digest",
    description: "Send a daily summary for unread chats and missed calls.",
    enabled: false,
  },
];

export default function SettingsPage() {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Account settings
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Security and notifications
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Configure how CipherChat handles trusted devices, privacy alerts, and
          message notifications.
        </p>
      </div>

      <div className="divide-y rounded-xl border bg-card">
        {settings.map((item) => (
          <div key={item.title} className="flex items-center justify-between gap-4 p-5">
            <div className="flex gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <item.icon className="size-4 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
            <Switch defaultChecked={item.enabled} />
          </div>
        ))}
      </div>

      <Button className="w-fit">Save settings</Button>
    </section>
  );
}
