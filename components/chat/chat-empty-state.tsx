import { MessageSquare } from "lucide-react";

export function ChatEmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-muted/30 p-8">
      <div className="flex size-24 items-center justify-center rounded-full bg-muted">
        <MessageSquare className="size-10 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <p className="mt-6 max-w-xs text-center text-sm text-muted-foreground">
        Select a chat from the list to start reading and replying to your
        messages.
      </p>
    </div>
  );
}
