"use client";

import { useState } from "react";

import { ChatEmptyState } from "@/components/chat/chat-empty-state";
import { ChatList } from "@/components/chat/chat-list";
import { ChatWindow } from "@/components/chat/chat-window";
import { cn } from "@/lib/utils";

interface ChatScreenProps {
  initialChatId?: string;
}

export function ChatScreen({ initialChatId }: ChatScreenProps) {
  const [activeChatId, setActiveChatId] = useState<string | undefined>(initialChatId);

  return (
    <div className="flex size-full overflow-hidden">
      <div
        className={cn(
          "h-full w-full sm:w-auto",
          activeChatId ? "hidden sm:block" : "block"
        )}
      >
        <ChatList activeChatId={activeChatId} onSelectChat={setActiveChatId} />
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 overflow-hidden",
          !activeChatId ? "hidden sm:flex" : "flex"
        )}
      >
        {activeChatId ? (
          <ChatWindow chatId={activeChatId} onBack={() => setActiveChatId(undefined)} />
        ) : (
          <ChatEmptyState />
        )}
      </div>
    </div>
  );
}
