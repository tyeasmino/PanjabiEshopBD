
import { ArrowLeft, Clock3, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function VerificationExpiredPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
            <div className="w-full max-w-lg">

                <Link
                    href="/"
                    className="mb-12 block text-center text-lg font-bold tracking-tight text-foreground"
                >
                    PANJABI <span className="text-primary">ESHOP BD.</span>
                </Link>

                <div className="rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Clock3 size={38} strokeWidth={1.6} />
                    </div>

                    <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Link Expired
                    </span>

                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                        Verification link expired
                    </h1>

                    <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                        Your email verification link is no longer valid.
                        Don't worry — you can request a new verification link
                        to activate your account.
                    </p>

                    <div className="mt-8 rounded-xl border border-border bg-background p-4 text-left">
                        <p className="text-sm font-medium text-foreground">
                            What happened?
                        </p>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                            Verification links are valid for a limited time.
                            This link has passed its validity period.
                        </p>
                    </div>

                    <Link
                        href="/resend-verification"
                        className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        <RefreshCw size={17} />
                        Request a New Link
                    </Link>

                    <Link
                        href="/sign-in"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                    >
                        <ArrowLeft size={15} />
                        Back to Sign In
                    </Link>
                </div>

                <p className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                </p>
            </div>
        </main>
    );
}
