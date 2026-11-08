"use client";

import { ArrowLeft, CheckCircle2, Eye, EyeOff, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChangePasswordPage() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswords, setShowPasswords] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const passwordsMatch =
        newPassword.length > 0 && newPassword === confirmPassword;

    const isValid =
        currentPassword.length > 0 &&
        newPassword.length >= 8 &&
        passwordsMatch;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValid) return;

        // Backend API integration will be added later.
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
                <div className="w-full max-w-md rounded-2xl border border-border bg-card p-7 text-center shadow-sm sm:p-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                        <CheckCircle2 className="h-11 w-11 text-green-500" />
                    </div>

                    <h1 className="text-2xl font-semibold sm:text-3xl">
                        Password Updated!
                    </h1>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        Your password has been changed successfully.
                    </p>

                    <Link
                        href="/account"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Back to My Account
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
            <div className="w-full max-w-md">
                <Link
                    href="/account"
                    className="mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to My Account
                </Link>

                <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                        <LockKeyhole className="h-6 w-6 text-primary" />
                    </div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Account Security
                    </p>

                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Change Password
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        Update your password to keep your account secure.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Current Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPasswords ? "text" : "password"}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="Enter current password"
                                    required
                                    className="w-full rounded-xl border border-input bg-background px-4 py-3 pr-12 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswords(!showPasswords)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    aria-label={showPasswords ? "Hide passwords" : "Show passwords"}
                                >
                                    {showPasswords ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                New Password
                            </label>
                            <input
                                type={showPasswords ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                required
                                minLength={8}
                                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                            <p className="mt-2 text-xs text-muted-foreground">
                                Use at least 8 characters.
                            </p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Confirm New Password
                            </label>
                            <input
                                type={showPasswords ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                                required
                                minLength={8}
                                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />

                            {confirmPassword.length > 0 && !passwordsMatch && (
                                <p className="mt-2 text-xs text-red-500">
                                    Passwords do not match.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className="w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}