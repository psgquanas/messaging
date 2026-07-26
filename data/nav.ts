import type { LucideIcon } from "lucide-react";
import {
  Bell,
  CircleUserRound,
  MessageSquare,
  Settings,
  UsersRound,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  hasChildren?: boolean;
}

export const dashboardNavItems: NavItem[] = [
  { label: "Messages", href: "/chat", icon: MessageSquare },
  { label: "Contacts", href: "/contacts", icon: UsersRound },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Profile", href: "/profile", icon: CircleUserRound },
  { label: "Settings", href: "/settings", icon: Settings },
];
