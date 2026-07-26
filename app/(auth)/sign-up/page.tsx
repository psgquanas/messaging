import type { Metadata } from "next"

import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create your messaging account.",
}

export default function SignUpPage() {
  return <SignUpForm />
}
