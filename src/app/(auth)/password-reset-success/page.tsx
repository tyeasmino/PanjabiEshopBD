"use client";

import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PasswordResetSuccessPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
            <div className="w-full max-w-md">
                <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-sm sm:p-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                        <CheckCircle2 className="h-11 w-11 text-green-500" strokeWidth={1.7} />
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Password Updated
                    </p>

                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        You’re all set!
                    </h1>

                    <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                        Your password has been successfully changed. You can now sign in
                        to your Panjabi Eshop BD account using your new password.
                    </p>

                    <div className="my-7 flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-left">
                        <ShieldCheck className="h-5 w-5 shrink-0 text-green-500" />
                        <p className="text-xs leading-6 text-muted-foreground">
                            Your account security matters to us. Keep your new password
                            private and avoid sharing it with anyone.
                        </p>
                    </div>

                    <Link
                        href="/sign-in"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Sign In to Your Account
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/"
                        className="mt-5 inline-block text-sm text-muted-foreground transition hover:text-foreground"
                    >
                        Back to Home
                    </Link>
                </div>

                <p className="mt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                </p>
            </div>
        </main>
    );
}