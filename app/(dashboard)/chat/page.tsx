import type { Metadata } from "next";

import { ChatScreen } from "@/components/chat/chat-screen";

export const metadata: Metadata = {
  title: "Messages - CipherChat",
  description: "Private chats and everyday conversations.",
};

export default function ChatPage() {
  return <ChatScreen />;
}
