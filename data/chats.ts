import type { ChatMessage, ChatSummary } from "@/types/chat";

export const chats: ChatSummary[] = [
  {
    id: "maya-chen",
    name: "Maya Chen",
    role: "Friend",
    initials: "MC",
    lastMessage: "Dinner at 7 still works for me.",
    timestamp: "10 min",
    status: "read",
    unreadCount: 3,
    isOnline: true,
  },
  {
    id: "family",
    name: "Family",
    role: "Group chat",
    initials: "FA",
    lastMessage: "Dad sent the weekend photos.",
    timestamp: "38 min",
    status: "delivered",
    unreadCount: 1,
    isOnline: true,
  },
  {
    id: "owen-patel",
    name: "Owen Patel",
    role: "Contact",
    initials: "OP",
    lastMessage: "I sent the address. See you soon.",
    timestamp: "Yesterday",
    status: "read",
    isOnline: true,
  },
  {
    id: "book-club",
    name: "Book Club",
    role: "Group chat",
    initials: "BC",
    lastMessage: "Next pick is already in the shared notes.",
    timestamp: "1 day",
    status: "sent",
    isOnline: false,
  },
  {
    id: "leah",
    name: "Leah Brooks",
    role: "Contact",
    initials: "LB",
    lastMessage: "Voice note was perfect. Thank you.",
    timestamp: "2 days",
    status: "read",
    isOnline: false,
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: "maya-1",
    chatId: "maya-chen",
    author: "Maya",
    body: "Dinner at 7 still works for me.",
    timestamp: "9:48 AM",
  },
  {
    id: "maya-2",
    chatId: "maya-chen",
    author: "You",
    body: "Perfect. I will leave in twenty minutes.",
    timestamp: "9:51 AM",
    mine: true,
  },
  {
    id: "maya-3",
    chatId: "maya-chen",
    author: "Maya",
    body: "I saved us the table by the window.",
    timestamp: "9:55 AM",
  },
  {
    id: "maya-4",
    chatId: "maya-chen",
    author: "Maya",
    body: "Dinner at 7 still works for me.",
    timestamp: "10:02 AM",
  },
  {
    id: "family-1",
    chatId: "family",
    author: "Mom",
    body: "Dad sent the weekend photos.",
    timestamp: "8:40 AM",
  },
  {
    id: "family-2",
    chatId: "family",
    author: "You",
    body: "They look great. I saved my favorites.",
    timestamp: "8:47 AM",
    mine: true,
  },
  {
    id: "owen-1",
    chatId: "owen-patel",
    author: "Owen",
    body: "I sent the address. See you soon.",
    timestamp: "Yesterday",
  },
  {
    id: "owen-2",
    chatId: "owen-patel",
    author: "You",
    body: "Got it. I will bring the charger too.",
    timestamp: "Yesterday",
    mine: true,
  },
  {
    id: "book-1",
    chatId: "book-club",
    author: "Sam",
    body: "Next pick is already in the shared notes.",
    timestamp: "Mon",
  },
  {
    id: "leah-1",
    chatId: "leah",
    author: "Leah",
    body: "Voice note was perfect. Thank you.",
    timestamp: "Fri",
  },
];

export function getChatById(id?: string) {
  return chats.find((chat) => chat.id === id);
}

export function getMessagesForChat(chatId?: string) {
  return chatMessages.filter((message) => message.chatId === chatId);
}
