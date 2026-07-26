import type { Metadata } from "next";

import { ChatScreen } from "@/components/chat/chat-screen";

export const metadata: Metadata = {
  title: "Chat - CipherChat",
  description: "Private chat and active conversation.",
};

export default async function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ChatScreen initialChatId={id} />;
}
