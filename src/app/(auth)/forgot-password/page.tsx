
"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email.trim()) return;

        // UI demo only — password reset email will be connected later.
        setSubmitted(true);
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
            <div className="w-full max-w-lg">

                <Link
                    href="/"
                    className="mb-12 block text-center text-lg font-bold tracking-tight text-foreground"
                >
                    PANJABI <span className="text-primary">ESHOP BD.</span>
                </Link>

                <div className="rounded-2xl border border-border bg-card px-6 py-10 shadow-sm sm:px-10 sm:py-12">

                    {!submitted ? (
                        <>
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Mail size={36} strokeWidth={1.6} />
                            </div>

                            <div className="mt-8 text-center">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Account Recovery
                                </span>

                                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                                    Forgot your password?
                                </h1>

                                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                    No worries. Enter your registered email
                                    address and we'll send you a link to reset
                                    your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                >
                                    Send Reset Link
                                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="py-4 text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                <CheckCircle2 size={40} strokeWidth={1.6} />
                            </div>

                            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Request Submitted
                            </span>

                            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                                Check your inbox
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                If an account exists with{" "}
                                <span className="font-medium text-foreground">
                                    {email}
                                </span>
                                , you'll receive instructions to reset your
                                password.
                            </p>

                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-sm font-semibold text-primary hover:underline"
                            >
                                Try another email
                            </button>
                        </div>
                    )}

                    <div className="mt-8 border-t border-border pt-6 text-center">
                        <Link
                            href="/sign-in"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                        >
                            <ArrowLeft size={15} />
                            Back to Sign In
                        </Link>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                </p>
            </div>
        </main>
    );
}
