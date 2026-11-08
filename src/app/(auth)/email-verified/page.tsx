
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function EmailVerifiedPage() {
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

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                        <CheckCircle2 size={42} strokeWidth={1.6} />
                    </div>

                    <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Verification Complete
                    </span>

                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                        Email verified!
                    </h1>

                    <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                        Your email address has been successfully verified.
                        Your account is now ready to use.
                    </p>

                    <div className="mt-8 rounded-xl border border-border bg-background p-4 text-left">
                        <p className="text-sm font-medium text-foreground">
                            You're all set!
                        </p>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                            Sign in to your account and explore our latest
                            Panjabi collections.
                        </p>
                    </div>

                    <Link
                        href="/sign-in"
                        className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Sign In to Your Account
                        <ArrowRight size={17} />
                    </Link>

                    <Link
                        href="/products"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                    >
                        <ShoppingBag size={16} />
                        Continue Shopping
                    </Link>
                </div>

                <p className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                </p>
            </div>
        </main>
    );
}
