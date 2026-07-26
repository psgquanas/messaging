"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatListItem } from "@/components/chat/chat-list-item";
import { ChatSearch } from "@/components/chat/chat-search";
import { chats } from "@/data/chats";

interface ChatListProps {
  activeChatId?: string;
  onSelectChat?: (id: string) => void;
}

export function ChatList({ activeChatId, onSelectChat }: ChatListProps) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.toLowerCase().trim();
  const filteredChats = chats.filter((chat) => {
    const haystack = `${chat.name} ${chat.role ?? ""} ${chat.lastMessage}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  return (
    <div className="flex h-full w-full shrink-0 flex-col border-r bg-background sm:w-80 md:w-96">
      <div className="shrink-0 border-b p-4 pb-2 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-foreground">Messages</h2>
          </div>
          <Button aria-label="New chat" variant="outline" size="icon" className="size-8 rounded-full">
            <Plus className="size-4" />
          </Button>
        </div>
        <ChatSearch value={query} onChange={setQuery} />
      </div>

      <ScrollArea className="flex-1 min-h-0">
        <ul className="divide-y">
          {filteredChats.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              active={chat.id === activeChatId}
              onSelect={onSelectChat}
            />
          ))}
          {filteredChats.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">
              No chats match that search.
            </li>
          )}
        </ul>
      </ScrollArea>
    </div>
  );
}
