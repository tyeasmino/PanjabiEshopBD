
import {
    ArrowLeft,
    ArrowUpRight,
    FileText,
    RefreshCw,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const policies = [
    {
        number: "01",
        label: "Privacy Policy",
        description: "Your personal information",
        href: "/privacy-policy",
        icon: ShieldCheck,
    },
    {
        number: "02",
        label: "Terms & Conditions",
        description: "Rules of using our store",
        href: "/terms",
        icon: FileText,
    },
    {
        number: "03",
        label: "Shipping & Return",
        description: "Delivery and customer care",
        href: "/shipping-returns",
        icon: RefreshCw,
    },
];

type PolicyLayoutProps = {
    eyebrow: string;
    title: string;
    description: string;
    children: ReactNode;
};

export default function PolicyLayout({
    eyebrow,
    title,
    description,
    children,
}: PolicyLayoutProps) {
    return (
        <main className="min-h-screen bg-background text-foreground">

            {/* Editorial Header */}
            <section className="relative overflow-hidden border-b border-border bg-secondary/30">

                <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-primary/10" />
                <div className="pointer-events-none absolute -right-10 -top-16 h-60 w-60 rounded-full border border-primary/10" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">

                    <Link
                        href="/"
                        className="mb-12 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        <ArrowLeft size={15} />
                        Back to Home
                    </Link>

                    <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary sm:text-xs">
                                    {eyebrow}
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                                {title}
                            </h1>
                        </div>

                        <div className="max-w-md lg:justify-self-end">
                            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                                {description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                <ShieldCheck size={15} className="text-primary" />
                                Customer Information & Guidelines
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 flex items-center justify-between border-t border-border pt-5">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Panjabi Eshop BD
                        </span>

                        <span className="text-[10px] text-muted-foreground">
                            Updated: 09 November 2026
                        </span>
                    </div>

                </div>
            </section>

            {/* Policy Navigation */}
            <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 sm:pt-10">

                <div className="mb-5 flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Explore Our Policies
                    </p>

                    <span className="text-[10px] text-muted-foreground">
                        03 Documents
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                    {policies.map((policy) => {
                        const Icon = policy.icon;

                        return (
                            <Link
                                key={policy.href}
                                href={policy.href}
                                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 sm:p-5"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                                    <Icon size={19} strokeWidth={1.7} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="mb-1 flex items-center gap-2">
                                        <span className="text-[9px] font-semibold tracking-wider text-primary">
                                            {policy.number}
                                        </span>
                                        <h3 className="truncate text-sm font-semibold text-foreground">
                                            {policy.label}
                                        </h3>
                                    </div>

                                    <p className="text-xs text-muted-foreground">
                                        {policy.description}
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={16}
                                    className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                                />
                            </Link>
                        );
                    })}

                </div>
            </section>

            {/* Main Policy Content */}
            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[230px_1fr] lg:gap-16">

                {/* Sidebar */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">

                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            Information
                        </p>

                        <div className="space-y-4 border-l border-border pl-5">
                            <p className="text-sm font-medium text-foreground">
                                Customer Policies
                            </p>

                            <p className="text-xs leading-6 text-muted-foreground">
                                Please review the information below to
                                understand our store policies and
                                customer guidelines.
                            </p>
                        </div>

                        <div className="mt-10 rounded-xl border border-border bg-card p-5">
                            <ShieldCheck
                                size={21}
                                className="mb-4 text-primary"
                            />

                            <h3 className="text-sm font-semibold">
                                Need assistance?
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-muted-foreground">
                                Our support team is available to help
                                with your questions.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:gap-3"
                            >
                                Contact Us
                                <ArrowUpRight size={14} />
                            </Link>
                        </div>

                    </div>
                </aside>

                {/* Content */}
                <div className="min-w-0">

                    <div className="mb-9 border-b border-border pb-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                            Official Guidelines
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                            Everything you need to know.
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                            We believe in keeping things transparent.
                            Here you will find the information that helps
                            make your shopping experience clear and
                            comfortable.
                        </p>
                    </div>

                    <article className="space-y-0">
                        {children}
                    </article>

                </div>

            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
                <div className="relative overflow-hidden rounded-2xl bg-[#25221F] px-6 py-10 text-white sm:px-10 sm:py-12">

                    <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#FC6900]/20" />
                    <div className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#FC6900]/20" />

                    <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-center">

                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FC914D]">
                                We're Here to Help
                            </p>

                            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                Have a question?
                            </h2>

                            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                                If you need clarification about any of
                                our policies, feel free to reach out
                                to our team.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#FC6900] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#e85f00]"
                        >
                            Contact Our Team
                            <ArrowUpRight size={17} />
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
}

export function PolicySection({
    number,
    title,
    children,
}: {
    number: number;
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="group border-b border-border py-8 first:pt-0 last:border-0">

            <div className="flex items-start gap-4 sm:gap-6">

                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-[10px] font-bold text-primary">
                    {String(number).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {title}
                    </h2>

                    <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                        {children}
                    </div>
                </div>

            </div>
        </section>
    );
}