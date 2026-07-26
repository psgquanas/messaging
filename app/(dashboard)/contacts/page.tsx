import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const contacts = [
  {
    name: "Maya Chen",
    role: "Friend",
    status: "Online",
    initials: "MC",
  },
  {
    name: "Owen Patel",
    role: "Contact",
    status: "Away",
    initials: "OP",
  },
  {
    name: "Nina Brooks",
    role: "Friend",
    status: "Online",
    initials: "NB",
  },
  {
    name: "Leo Grant",
    role: "Contact",
    status: "Offline",
    initials: "LG",
  },
];

export default function ContactsPage() {
  return (
    <section className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Contacts
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            People
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            People available for private CipherChat conversations.
          </p>
        </div>
        <Button>Add contact</Button>
      </div>

      <div className="divide-y rounded-xl border bg-card">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="flex items-center justify-between gap-4 p-5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <Avatar className="size-10">
                <AvatarFallback>{contact.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold">
                  {contact.name}
                </h2>
                <p className="truncate text-sm text-muted-foreground">
                  {contact.role}
                </p>
              </div>
            </div>
            <Badge variant={contact.status === "Online" ? "default" : "secondary"}>
              {contact.status}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
}
