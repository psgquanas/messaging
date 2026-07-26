import { AuthFormShell } from "@/components/auth/auth-form-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
  return (
    <AuthFormShell
      eyebrow="Account recovery"
      title="Reset your password"
      description="Enter your CipherChat account email and we will send a secure reset link."
      switchText="Remember your password?"
      switchHref="/sign-in"
      switchLabel="Sign in"
    >
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" />
        </div>
        <Button className="w-full" type="submit">
          Send reset link
        </Button>
      </form>
    </AuthFormShell>
  );
}
