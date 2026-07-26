import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.92_0.04_160/0.4),transparent)] pt-12 pb-0 sm:pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        <div className="mb-5 inline-flex max-w-xs flex-wrap items-center justify-center gap-2 rounded-full border border-border/60 bg-muted/60 px-4 py-1.5 backdrop-blur-sm sm:max-w-none sm:flex-nowrap">
          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
            Secure
          </span>
          <span className="text-sm text-muted-foreground">
            Private conversations with end-to-end encryption
          </span>
        </div>

        <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Private messaging built for the modern web.
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-base leading-7 text-muted-foreground sm:max-w-2xl md:text-lg">
          Chat confidently with true end-to-end encryption, real-time messaging,
          file sharing, and complete privacy.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/sign-up">
              Start Messaging
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

