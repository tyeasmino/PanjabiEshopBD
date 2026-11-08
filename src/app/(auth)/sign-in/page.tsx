
"use client";

import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <main className="grid min-h-screen bg-background lg:grid-cols-2">

            {/* Left - Brand Visual */}
            <section className="relative hidden overflow-hidden bg-[#252526] lg:block">

                <Image
                    src="/images/hero-panjabi.png"
                    alt="Panjabi Eshop BD Collection"
                    fill
                    priority
                    className="object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

                <div className="absolute left-12 top-12 z-10">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tight text-white"
                    >
                        PANJABI <span className="text-[#FC6900]">ESHOP BD.</span>
                    </Link>
                </div>

                <div className="absolute bottom-16 left-12 right-12 z-10">
                    <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.3em] text-[#FC6900]">
                        Welcome Back
                    </span>

                    <h1 className="max-w-lg text-5xl font-semibold leading-tight tracking-tight text-white xl:text-6xl">
                        Your Style, <br />
                        Your Story, <br />
                        <span className="text-[#FC6900]">Your Way.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
                        Sign in and continue exploring timeless Panjabi
                        styles made for every occasion.
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-px w-12 bg-[#FC6900]" />
                        <span className="text-[10px] tracking-[0.25em] text-white/60">
                            PANJABI ESHOP BD
                        </span>
                    </div>
                </div>
            </section>

            {/* Right - Sign In Form */}
            <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-10 lg:px-12">

                <div className="w-full max-w-md">

                    {/* Mobile Brand */}
                    <Link
                        href="/"
                        className="mb-12 block text-center text-lg font-bold tracking-tight text-foreground lg:hidden"
                    >
                        PANJABI <span className="text-primary">ESHOP BD.</span>
                    </Link>

                    <div className="mb-9">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Welcome Back
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Sign in to your account
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Enter your email and password to access your account.
                        </p>
                    </div>

                    <form className="space-y-5">

                        {/* Email */}
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
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="h-12 w-full rounded-lg border border-input bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-foreground"
                                >
                                    Password
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="text-xs font-semibold text-primary transition hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    required
                                    className="h-12 w-full rounded-lg border border-input bg-card px-4 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <label className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 accent-[#FC6900]"
                            />
                            Remember me
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group flex h-13 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                            Sign In
                            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                        </button>

                    </form>

                    <div className="my-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs text-muted-foreground">NEW TO PANJABI ESHOP BD?</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="font-semibold text-primary transition hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                    <p className="mt-12 text-center text-xs text-muted-foreground">
                        <LockKeyhole size={13} className="mr-1 inline" />
                        Your account information is kept secure.
                    </p>

                    <p className="mt-3 text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                    </p>

                </div>
            </section>
        </main>
    );
}
