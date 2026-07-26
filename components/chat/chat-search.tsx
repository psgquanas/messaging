import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ChatSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ChatSearch({ value, onChange }: ChatSearchProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search chats or people..."
        className="pl-9"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
