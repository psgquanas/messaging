const testimonials = [
  {
    quote:
      "CipherChat replaced the messy apps I used for family and friends. The encryption is transparent and the UX is just right.",
    name: "Maya Chen",
    role: "Daily CipherChat user",
    initials: "MC",
  },
  {
    quote:
      "I've tried every privacy-focused messenger. CipherChat is the only one that doesn't make you feel like you're using a security product.",
    name: "James Okafor",
    role: "Independent Security Researcher",
    initials: "JO",
  },
  {
    quote:
      "Real-time, encrypted, and actually fast. My group chats feel calmer, clearer, and easier to keep up with.",
    name: "Sara Lindqvist",
    role: "Community organizer",
    initials: "SL",
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Trusted by people
          </p>
          <h2 className="mx-auto max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            What people are saying
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-border/60 bg-background p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-7 text-muted-foreground">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs text-muted-foreground">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
