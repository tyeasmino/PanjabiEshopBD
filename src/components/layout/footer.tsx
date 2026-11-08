
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Shirt
} from "lucide-react";
import Link from "next/link";

const shopLinks = [
    { label: "All Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Shopping Cart", href: "/cart" },
];

const helpLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "My Account", href: "/sign-in" },
    { label: "Create Account", href: "/sign-up" },
];

const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Shipping & Return Policy", href: "/shipping-returns" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card">

            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Main Footer */}
                <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr_1fr] lg:gap-8">

                    {/* Brand */}
                    <div className="max-w-sm">

                        <Link
                            href="/"
                            aria-label="Panjabi Eshop BD Home"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Shirt size={25} strokeWidth={1.7} />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold tracking-tight text-foreground">
                                    Panjabi <span className="text-primary">Eshop BD</span>
                                </h2>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                    Traditional Style. Modern Choice.
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 text-sm leading-7 text-muted-foreground">
                            Discover a collection of Panjabi styles that
                            celebrate tradition and bring a modern touch
                            to your everyday wardrobe.
                        </p>

                        <Link
                            href="/products"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                        >
                            Explore Collection
                            <ArrowUpRight size={16} />
                        </Link>

                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                            Explore
                        </h3>

                        <ul className="space-y-4">
                            {shopLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Help */}
                    <div>
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                            Customer Care
                        </h3>

                        <ul className="space-y-4">
                            {helpLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div>
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                            Legal & Policies
                        </h3>

                        <ul className="space-y-4">
                            {policyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                            Get In Touch
                        </h3>

                        <div className="space-y-5">

                            <Link
                                href="/contact"
                                className="group flex items-start gap-3"
                            >
                                <Mail
                                    size={17}
                                    className="mt-0.5 shrink-0 text-primary"
                                />
                                <span className="text-sm leading-6 text-muted-foreground transition-colors group-hover:text-primary">
                                    Send us a message
                                </span>
                            </Link>

                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-primary"
                                />
                                <span className="text-sm leading-6 text-muted-foreground">
                                    Bangladesh
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col gap-5 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs leading-6 text-muted-foreground">
                        © {new Date().getFullYear()} Panjabi Eshop BD.
                        All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="text-xs text-muted-foreground">
                            Made for your style.
                        </span>

                        <Link
                            href="/"
                            className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Back to Home ↑
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}
