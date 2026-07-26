import Link from "next/link"

import { AuthFormShell } from "@/components/auth/auth-form-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpForm() {
  return (
    <AuthFormShell
      eyebrow="Start messaging"
      title="Create your account"
      description="Create your account and start sending private, realtime messages."
      switchHref="/sign-in"
      switchLabel="Sign in"
      switchText="Already have an account?"
    >
      <form className="grid gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="name" className="text-xs">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            className="h-9"
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="email" className="text-xs">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="h-9"
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="password" className="text-xs">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            placeholder="Create a password"
            required
            className="h-9"
          />
          <p className="text-xs leading-4 text-muted-foreground">
            Use at least 8 characters.
          </p>
        </div>

        <Button type="submit" size="lg" className="h-9 w-full">
          Create account
        </Button>

        <p className="text-center text-xs leading-4 text-muted-foreground">
          By continuing, you agree to the{" "}
          <Link
            href="/terms"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </AuthFormShell>
  )
}
