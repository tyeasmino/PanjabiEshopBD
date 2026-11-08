
"use client";

import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordsMatch =
        confirmPassword.length === 0 || password === confirmPassword;

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

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <LockKeyhole size={36} strokeWidth={1.6} />
                    </div>

                    <div className="mt-8 text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Account Recovery
                        </span>

                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                            Create a new password
                        </h1>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            Choose a new password for your account.
                            Make sure it's secure and easy for you to remember.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            if (password !== confirmPassword) return;

                            // UI demo only — backend reset will be connected later.
                        }}
                        className="mt-9 space-y-5"
                    >
                        {/* New Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                New Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    autoComplete="new-password"
                                    required
                                    className="h-12 w-full rounded-lg border border-input bg-background px-4 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Confirm New Password
                            </label>

                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    autoComplete="new-password"
                                    required
                                    className="h-12 w-full rounded-lg border border-input bg-background px-4 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {!passwordsMatch && (
                                <p className="mt-2 text-xs text-red-500">
                                    Passwords do not match.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={!password || !confirmPassword || !passwordsMatch}
                            className="group flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Reset Password
                            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <div className="mt-8 border-t border-border pt-6 text-center">
                        <Link
                            href="/sign-in"
                            className="text-sm font-medium text-muted-foreground transition hover:text-primary"
                        >
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
