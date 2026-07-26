import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "Pricing", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "Status Page", href: "#" },
      { label: "Community", href: "#" },
      { label: "Contact Support", href: "#" },
    ],
    Legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR Compliance", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand info */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="grid h-6 w-6 grid-cols-2 grid-rows-2 gap-0.5">
                <div className="rounded-sm bg-foreground" />
                <div className="rounded-sm bg-foreground/30" />
                <div className="rounded-sm bg-foreground/30" />
                <div className="rounded-sm bg-foreground" />
              </div>
              <span className="text-base font-extrabold tracking-tight">CipherChat</span>
            </Link>
            <p className="max-w-xs text-xs leading-5 text-muted-foreground">
              End-to-end encrypted messaging designed for people who value security, speed, and privacy.
            </p>
          </div>

          {/* Links Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-4">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground/60 text-center sm:text-left">
            &copy; {currentYear} CipherChat. All rights reserved. Built with privacy in mind.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground/60">
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <span>&middot;</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
