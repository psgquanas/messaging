"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Moon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-0.5">
            <div className="rounded-sm bg-foreground" />
            <div className="rounded-sm bg-foreground/30" />
            <div className="rounded-sm bg-foreground/30" />
            <div className="rounded-sm bg-foreground" />
          </div>
          <span className="text-lg font-extrabold tracking-tight">CipherChat</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon">
            <Moon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">
              Get Started
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile: dark mode + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <Button variant="ghost" size="icon">
            <Moon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border/40 bg-background/95 px-4 pb-4 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-border/40 pt-3">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/sign-in" onClick={() => setOpen(false)}>Sign In</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/sign-up" onClick={() => setOpen(false)}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}