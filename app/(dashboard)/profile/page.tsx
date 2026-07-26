import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Personal account
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Your CipherChat profile
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Manage the name, account details, and trusted devices used for your
          private conversations.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ["Plan", "Personal"],
          ["Chats", "5 active"],
          ["Devices", "2 trusted"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border bg-card p-4">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="mt-2 text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold">Account security</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Account recovery and device trust are current.
            </p>
          </div>
          <Badge className="rounded-full">Healthy</Badge>
        </div>
        <Button className="mt-4" variant="outline">
          Review devices
        </Button>
      </div>
    </section>
  );
}
