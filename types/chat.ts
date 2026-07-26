export type MessageStatus = "sent" | "delivered" | "read";

export interface ChatSummary {
  id: string;
  name: string;
  role?: string;
  avatarUrl?: string;
  /** Two-letter fallback shown when no avatarUrl is available */
  initials?: string;
  lastMessage: string;
  timestamp: string;
  status: MessageStatus;
  unreadCount?: number;
  isOnline?: boolean;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  author: string;
  body: string;
  timestamp: string;
  mine?: boolean;
}
