
"use client";

import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                        A Style That Speaks
                    </span>

                    <h1 className="max-w-lg text-5xl font-semibold leading-tight tracking-tight text-white xl:text-6xl">
                        Tradition, <br />
                        Tailored for <br />
                        <span className="text-[#FC6900]">Today.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
                        Discover timeless Panjabi styles that bring together
                        heritage, comfort and modern elegance.
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-px w-12 bg-[#FC6900]" />
                        <span className="text-[10px] tracking-[0.25em] text-white/60">
                            PANJABI ESHOP BD
                        </span>
                    </div>
                </div>
            </section>

            {/* Right - Sign Up Form */}
            <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-10 lg:px-12">

                <div className="w-full max-w-md">

                    {/* Mobile Brand */}
                    <Link
                        href="/"
                        className="mb-12 block text-center text-lg font-bold tracking-tight lg:hidden"
                    >
                        PANJABI <span className="text-primary">ESHOP BD.</span>
                    </Link>

                    <div className="mb-9">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Join Our Community
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Create your account
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Create an account to explore our collection and
                            enjoy a better shopping experience.
                        </p>
                    </div>

                    <form className="space-y-5">

                        {/* Full Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                className="h-12 w-full rounded-lg border border-input bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                className="h-12 w-full rounded-lg border border-input bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    autoComplete="new-password"
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

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-foreground">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    autoComplete="new-password"
                                    className="h-12 w-full rounded-lg border border-input bg-card px-4 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 shrink-0 accent-[#FC6900]"
                            />
                            <span>
                                I agree to the{" "}
                                <Link href="/terms" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
                                    Terms & Conditions
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy-policy" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
                                    Privacy Policy
                                </Link>.
                            </span>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group flex h-13 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                            Create Account
                            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                        </button>

                    </form>

                    <div className="my-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-xs text-muted-foreground">ALREADY A MEMBER?</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="font-semibold text-primary transition hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                    <p className="mt-12 text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Panjabi Eshop BD. All rights reserved.
                    </p>

                </div>
            </section>
        </main>
    );
}
