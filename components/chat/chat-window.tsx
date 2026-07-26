"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  MoreHorizontal,
  Paperclip,
  Send,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { getChatById, getMessagesForChat } from "@/data/chats";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types/chat";

interface ChatWindowProps {
  chatId?: string;
  onBack?: () => void;
}

export function ChatWindow({ chatId, onBack }: ChatWindowProps) {
  const chat = getChatById(chatId);
  const seedMessages = useMemo(() => getMessagesForChat(chatId), [chatId]);
  const [draft, setDraft] = useState("");
  const [sentMessages, setSentMessages] = useState<ChatMessage[]>([]);

  if (!chat) {
    return null;
  }

  const messages = [...seedMessages, ...sentMessages];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = draft.trim();

    if (!body || !chatId) {
      return;
    }

    setSentMessages((current) => [
      ...current,
      {
        id: `local-${Date.now()}`,
        chatId,
        author: "You",
        body,
        timestamp: "Just now",
        mine: true,
      },
    ]);
    setDraft("");
  }

  return (
    <section className="flex min-w-0 flex-1 flex-col bg-background">
      <header className="flex shrink-0 items-center justify-between gap-4 border-b px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            aria-label="Back to messages"
            className="sm:hidden"
            size="icon"
            type="button"
            variant="ghost"
            onClick={onBack}
          >
            <ArrowLeft className="size-4" />
          </Button>

          <div className="relative shrink-0">
            <Avatar className="size-10">
              <AvatarImage src={chat.avatarUrl} alt={chat.name} />
              <AvatarFallback>{chat.initials}</AvatarFallback>
            </Avatar>
            {chat.isOnline && (
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-base font-semibold text-foreground">
                {chat.name}
              </h1>
              <Badge variant="outline" className="hidden rounded-full text-[11px] sm:inline-flex">
                {chat.role}
              </Badge>
            </div>
            <p className="truncate text-xs text-muted-foreground">
              Private chat · {chat.isOnline ? "active now" : "last seen recently"}
            </p>
          </div>
        </div>

        <Button aria-label="Chat options" size="icon" type="button" variant="ghost">
          <MoreHorizontal className="size-4" />
        </Button>
      </header>

      <div className="flex min-h-0 flex-1 flex-col">
        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-4 px-4 py-5 sm:px-6">
            {messages.map((message) => (
              <article
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.mine && "justify-end"
                )}
              >
                {!message.mine && (
                  <Avatar className="mt-1 size-8">
                    <AvatarFallback>{message.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-4 py-3 text-sm shadow-sm sm:max-w-[62%]",
                    message.mine
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md border bg-card text-card-foreground"
                  )}
                >
                  {!message.mine && (
                    <p className="mb-1 text-xs font-medium text-muted-foreground">
                      {message.author}
                    </p>
                  )}
                  <p className="leading-relaxed">{message.body}</p>
                  <p
                    className={cn(
                      "mt-2 text-[11px]",
                      message.mine ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="shrink-0 border-t bg-background p-3 sm:p-4">
          <div className="rounded-xl border bg-card p-2 shadow-sm">
            <Textarea
              aria-label={`Message ${chat.name}`}
              className="max-h-32 min-h-12 resize-none border-0 bg-transparent px-2 shadow-none focus-visible:ring-0"
              placeholder={`Message ${chat.name}...`}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
            />
            <div className="flex items-center justify-between gap-2 px-1 pt-2">
              <Button type="button" variant="ghost" size="sm">
                <Paperclip className="size-4" />
                Attach
              </Button>
              <Button type="submit" disabled={!draft.trim()}>
                <Send className="size-4" />
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
