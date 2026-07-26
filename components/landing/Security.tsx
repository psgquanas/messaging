import { CheckCircle2 } from "lucide-react";

const points = [
  "256-bit AES encryption for every message",
  "Perfect forward secrecy — past sessions stay safe",
  "Open-source cryptography primitives",
  "No message logs stored on our servers",
  "Ephemeral sessions with automatic key rotation",
  "Independent security audits, published annually",
];

export default function Security() {
  return (
    <section id="security" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-foreground text-background">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Text side */}
            <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:py-16">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-background/50">
                Security First
              </p>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Privacy is the product, not a feature.
              </h2>
              <p className="mb-8 max-w-md text-base leading-7 text-background/70">
                We built CipherChat from the ground up with a security-first
                architecture. Every design decision starts with one question:
                does this protect our users?
              </p>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-background/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div className="relative flex items-center justify-center bg-background/5 px-8 py-12 lg:py-0">
              {/* Decorative lock graphic */}
              <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-background/10 animate-[spin_20s_linear_infinite]" />
                {/* Mid ring */}
                <div className="absolute inset-6 rounded-full border border-background/10 animate-[spin_12s_linear_infinite_reverse]" />
                {/* Inner ring */}
                <div className="absolute inset-12 rounded-full border border-primary/40 animate-[spin_8s_linear_infinite]" />

                {/* Center lock */}
                <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-primary/20 backdrop-blur">
                  <div className="mb-1 h-6 w-6 rounded-t-full border-2 border-primary" />
                  <div className="h-8 w-10 rounded-lg bg-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                </div>

                {/* Floating badges */}
                {[
                  { label: "AES-256", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                  { label: "PFS", pos: "right-0 top-1/2 -translate-y-1/2 translate-x-1/2" },
                  { label: "E2E", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                  { label: "Zero-log", pos: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" },
                ].map(({ label, pos }) => (
                  <div
                    key={label}
                    className={`absolute ${pos} rounded-full border border-primary/30 bg-foreground px-3 py-1 text-[10px] font-bold text-primary`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
