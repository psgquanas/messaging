import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type AuthFormShellProps = {
  eyebrow: string
  title: string
  description: string
  switchHref: string
  switchLabel: string
  switchText: string
  children: React.ReactNode
}

export function AuthFormShell({
  eyebrow,
  title,
  description,
  switchHref,
  switchLabel,
  switchText,
  children,
}: AuthFormShellProps) {
  return (
    <main className="h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,oklch(0.96_0.03_220),transparent_32rem),linear-gradient(135deg,oklch(0.99_0.002_250),oklch(0.96_0.01_250))] px-4 py-4 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid h-full w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_440px]">
        <section className="hidden max-w-xl lg:block">
          <Link href="/" className="mb-8 flex items-center gap-2.5 w-fit">
            <div className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-0.5">
              <div className="rounded-sm bg-foreground" />
              <div className="rounded-sm bg-foreground/30" />
              <div className="rounded-sm bg-foreground/30" />
              <div className="rounded-sm bg-foreground" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              CipherChat
            </span>
          </Link>
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance">
            Messaging that feels calm, fast, and private.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Sign in to keep conversations synced, manage your spaces, and
            return to active threads without losing context.
          </p>
          <div className="mt-6 grid max-w-lg grid-cols-3 gap-3">
            {["Encrypted sessions", "Realtime inbox", "Focused threads"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border bg-background/70 p-3 text-sm font-medium shadow-sm shadow-black/5 backdrop-blur"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </section>

        <Card className="w-full border-border/60 bg-background/95 shadow-2xl shadow-black/10 backdrop-blur-xl">
          <CardHeader className="gap-1.5 pb-1 pt-5 px-6">
            <Link href="/" className="mb-2 flex items-center gap-2 w-fit">
              <div className="grid h-6 w-6 grid-cols-2 grid-rows-2 gap-0.5">
                <div className="rounded-sm bg-foreground" />
                <div className="rounded-sm bg-foreground/30" />
                <div className="rounded-sm bg-foreground/30" />
                <div className="rounded-sm bg-foreground" />
              </div>
              <span className="text-sm font-extrabold tracking-tight">
                CipherChat
              </span>
            </Link>
            <p className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
            <CardTitle className="text-xl font-semibold tracking-[-0.02em]">
              {title}
            </CardTitle>
            <CardDescription className="leading-5 text-xs">{description}</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-5 pt-4">
            {children}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              {switchText}{" "}
              <Link
                href={switchHref}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {switchLabel}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
