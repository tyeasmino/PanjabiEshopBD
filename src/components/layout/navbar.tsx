
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggle from "@/components/ui/theme-toggle";

const navLinks = [
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const { resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logo =
        mounted && resolvedTheme === "dark"
            ? "/images/dark-NextBuy.png"
            : "/images/lightNextbuyLogo.png";

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    aria-label="NextBuy Home"
                    className="shrink-0"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="relative h-14 w-36 overflow-hidden rounded-md bg-background sm:w-40">
                        <Image
                            src={logo}
                            alt="NextBuy"
                            fill
                            priority
                            sizes="160px"
                            className="object-cover"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 lg:flex">

                    <Link
                        href="/sign-in"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/sign-up"
                        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Sign Up
                    </Link>

                    <Link
                        href="/cart"
                        aria-label="Shopping cart"
                        className="relative rounded-lg border border-border p-2.5 transition-colors hover:bg-secondary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </Link>

                    <ThemeToggle />
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 lg:hidden">

                    <Link
                        href="/cart"
                        aria-label="Shopping cart"
                        className="rounded-lg p-2.5 transition-colors hover:bg-secondary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="rounded-lg border border-border p-2.5 transition-colors hover:bg-secondary"
                    >
                        {menuOpen ? (
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-border bg-background px-5 py-5 shadow-lg lg:hidden sm:px-8">

                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="my-4 border-t border-border" />

                    <div className="flex gap-3">
                        <Link
                            href="/sign-in"
                            onClick={() => setMenuOpen(false)}
                            className="flex-1 rounded-lg border border-border px-4 py-3 text-center text-sm font-medium hover:bg-secondary"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/sign-up"
                            onClick={() => setMenuOpen(false)}
                            className="flex-1 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                        >
                            Sign Up
                        </Link>
                    </div>

                    <div className="mt-5 flex flex-col gap-3">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Appearance
                        </p>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </header>
    );
}



