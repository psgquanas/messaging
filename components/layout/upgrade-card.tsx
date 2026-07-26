import { Button } from "@/components/ui/button";

export function UpgradeCard() {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <h4 className="mb-1 text-sm font-semibold text-foreground">
        Security digest
      </h4>
      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
        Review sign-in activity, trusted devices, and privacy updates for your
        account.
      </p>
      <Button className="w-full gap-2" size="sm">
        <span className="size-2 rounded-full bg-emerald-500" />
        View digest
      </Button>
    </div>
  );
}
