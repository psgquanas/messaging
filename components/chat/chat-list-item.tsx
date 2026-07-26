import { Check, CheckCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ChatSummary } from "@/types/chat";

interface ChatListItemProps {
  chat: ChatSummary;
  active?: boolean;
  onSelect?: (id: string) => void;
}

export function ChatListItem({ chat, active, onSelect }: ChatListItemProps) {
  const isUnread = (chat.unreadCount ?? 0) > 0;
  const StatusIcon = chat.status === "sent" ? Check : CheckCheck;

  return (
    <li>
      <button
        onClick={() => onSelect?.(chat.id)}
        className={cn(
          "flex w-full gap-3 p-4 text-left transition-colors hover:bg-muted",
          active && "bg-muted"
        )}
      >
        <div className="relative shrink-0">
          <Avatar className="size-10">
            <AvatarImage src={chat.avatarUrl} alt={chat.name} />
            <AvatarFallback>{chat.initials}</AvatarFallback>
          </Avatar>
          {chat.isOnline && (
            <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-medium text-foreground">
                {chat.name}
              </h3>
              {chat.role && (
                <p className="truncate text-xs text-muted-foreground">
                  {chat.role}
                </p>
              )}
            </div>
            <span className="ml-2 whitespace-nowrap text-xs text-muted-foreground">
              {chat.timestamp}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div
              className={cn(
                "flex min-w-0 items-center gap-1.5 text-sm",
                isUnread ? "font-medium text-foreground" : "text-muted-foreground"
              )}
            >
              <StatusIcon
                className={cn(
                  "size-3 shrink-0",
                  chat.status === "read" ? "text-emerald-500" : "text-muted-foreground"
                )}
              />
              <p className="truncate">{chat.lastMessage}</p>
            </div>

            {isUnread && (
              <Badge className="h-4 shrink-0 rounded-full bg-emerald-500 px-1.5 text-[10px] font-bold text-white hover:bg-emerald-500">
                {chat.unreadCount}
              </Badge>
            )}
          </div>
        </div>
      </button>
    </li>
  );
}
