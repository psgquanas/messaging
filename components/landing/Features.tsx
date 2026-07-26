import {
  Lock,
  Zap,
  MessageSquare,
  Shield,
  Globe,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encrypted",
    description:
      "Every message is encrypted on your device before it's sent. Not even we can read your conversations.",
  },
  {
    icon: Zap,
    title: "Real-Time Delivery",
    description:
      "Messages arrive instantly with WebSocket-powered live delivery. Zero lag, zero polling.",
  },
  {
    icon: MessageSquare,
    title: "Focused Threads",
    description:
      "Organize conversations into clean threads so important context never gets buried.",
  },
  {
    icon: Shield,
    title: "Zero Data Retention",
    description:
      "We don't store your message history on our servers. Your data lives only where you want it.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Browser, desktop, and mobile — stay in sync across all your devices seamlessly.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get notified only when it matters. Mute threads, set focus hours, and stay in control.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Why CipherChat
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Built for everyday conversations that deserve privacy, without
            sacrificing speed or usability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,oklch(0.92_0.04_160/0.15),transparent)] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 font-semibold tracking-tight">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
