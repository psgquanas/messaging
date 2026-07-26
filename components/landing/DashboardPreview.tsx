export default function DashboardPreview() {
  const messages = [
    { text: "Are we still meeting at 7?", time: "9:41 AM", self: false },
    { text: "Yes, I am leaving soon.", time: "9:42 AM", self: true },
    { text: "Perfect, no rush. I saved us a table.", time: "9:42 AM", self: false },
    { text: "Great. I will bring your book too.", time: "9:43 AM", self: true },
    { text: "Thank you. See you there.", time: "9:44 AM", self: false },
  ];

  const contacts = ["Alice", "Bob", "Family", "Leah", "Book Club"];

  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-x-1/4 -top-10 -z-10 h-40 rounded-full bg-primary/20 blur-3xl sm:h-48" />

          <div className="overflow-hidden rounded-xl border border-border/60 shadow-2xl shadow-black/10 sm:rounded-2xl">
            <div className="flex items-center gap-2 border-b border-border/40 bg-muted/40 px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/70 sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70 sm:h-3 sm:w-3" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/70 sm:h-3 sm:w-3" />
              <span className="mx-auto text-[10px] text-muted-foreground/60 sm:text-xs">CipherChat</span>
            </div>

            <div className="flex h-64 bg-background sm:h-96 md:h-[480px]">
              <div className="hidden w-44 shrink-0 flex-col border-r border-border/40 bg-muted/20 sm:flex md:w-56">
                <div className="border-b border-border/40 p-2 md:p-3">
                  <div className="flex h-7 items-center gap-2 rounded-md bg-background/70 px-2 md:h-8 md:px-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="h-2 w-16 rounded bg-muted-foreground/20 md:w-24" />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 p-1.5 md:p-2">
                  {contacts.map((name, i) => (
                    <div
                      key={name}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1.5 md:gap-2.5 md:px-2.5 md:py-2 ${i === 0 ? "bg-primary/10" : ""}`}
                    >
                      <div className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[9px] font-bold md:h-7 md:w-7 md:text-[10px] ${i === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {name[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`truncate text-[11px] font-medium md:text-xs ${i === 0 ? "text-primary" : "text-foreground"}`}>{name}</div>
                        <div className="mt-0.5 h-1.5 w-14 rounded bg-muted-foreground/15 md:w-20" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center gap-2 border-b border-border/40 px-3 py-2 sm:gap-3 sm:px-4 sm:py-3">
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-[9px] font-bold text-primary sm:h-7 sm:w-7 sm:text-[10px]">A</div>
                  <div>
                    <div className="text-[11px] font-semibold sm:text-xs">Alice</div>
                    <div className="text-[9px] text-muted-foreground sm:text-[10px]">Online</div>
                  </div>
                  <div className="ml-auto flex gap-1.5 sm:gap-2">
                    <div className="h-5 w-5 rounded bg-muted/50 sm:h-6 sm:w-6" />
                    <div className="h-5 w-5 rounded bg-muted/50 sm:h-6 sm:w-6" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 overflow-hidden px-3 py-3 sm:gap-3 sm:px-4 sm:py-4">
                  {messages.slice(0, 3).map((msg, i) => (
                    <div key={`mob-${i}`} className={`flex sm:hidden ${msg.self ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-2.5 py-1.5 text-[11px] ${msg.self ? "rounded-tr-sm bg-primary text-primary-foreground" : "rounded-tl-sm bg-muted text-foreground"}`}>
                        {msg.text}
                        <div className={`mt-0.5 text-[8px] ${msg.self ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</div>
                      </div>
                    </div>
                  ))}
                  {messages.map((msg, i) => (
                    <div key={`desk-${i}`} className={`hidden sm:flex ${msg.self ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[70%] rounded-2xl px-3 py-2 text-xs ${msg.self ? "rounded-tr-sm bg-primary text-primary-foreground" : "rounded-tl-sm bg-muted text-foreground"}`}>
                        {msg.text}
                        <div className={`mt-0.5 text-[9px] ${msg.self ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 border-t border-border/40 p-2 sm:p-3">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-muted/60 sm:h-7 sm:w-7" />
                  <div className="flex h-7 flex-1 items-center rounded-full border border-border/50 bg-muted/30 px-2.5 sm:h-8 sm:px-3">
                    <div className="h-2 w-24 rounded bg-muted-foreground/20 sm:w-32" />
                  </div>
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary sm:h-8 sm:w-8">
                    <div className="h-2.5 w-2.5 rounded-sm bg-primary-foreground/80" style={{ clipPath: "polygon(0 100%, 100% 50%, 0 0)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
