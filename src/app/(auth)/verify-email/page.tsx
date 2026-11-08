
import { ArrowRight, Mail, RefreshCw, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function VerifyEmailPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
            <div className="w-full max-w-lg">

                {/* Brand */}
                <Link
                    href="/"
                    className="mb-12 block text-center text-lg font-bold tracking-tight text-foreground"
                >
                    PANJABI <span className="text-primary">ESHOP BD.</span>
                </Link>

                {/* Verification Card */}
                <div className="rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail size={34} strokeWidth={1.6} />
                    </div>

                    <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Almost There
                    </span>

                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                        Verify your email
                    </h1>

                    <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                        Thank you for creating an account with Panjabi Eshop BD.
                        We've sent a verification link to your email address.
                    </p>

                    {/* Email Notice */}
                    <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-left">
                        <ShieldCheck size={20} className="mt-0.5 shrink-0 text-primary" />

                        <div>
                            <p className="text-sm font-medium text-foreground">
                                One more step to get started
                            </p>
                            <p className="mt-1 text-xs leading-6 text-muted-foreground">
                                Open the email and click the verification link
                                to activate your account.
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-xs leading-6 text-muted-foreground">
                        Can't find the email? Check your spam or junk folder.
                    </p>

                    <Link
                        href="/resend-verification"
                        className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        <RefreshCw size={16} />
                        Resend Verification Email
                    </Link>

                    <Link
                        href="/sign-up"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                    >
                        <ArrowRight size={15} className="rotate-180" />
                        Back to Sign Up
                    </Link>
                </div>

                <p className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                </p>
            </div>
        </main>
    );
}
