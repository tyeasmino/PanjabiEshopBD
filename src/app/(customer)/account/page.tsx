import {
    ArrowRight,
    ArrowUpRight,
    Box,
    CheckCircle2,
    Clock3,
    Package,
    Settings2,
    ShoppingBag,
    UserRound,
} from "lucide-react";
import Link from "next/link";

const stats = [
    {
        label: "Total Orders",
        value: "0",
        description: "All your purchases",
        icon: ShoppingBag,
    },
    {
        label: "Pending Orders",
        value: "0",
        description: "Currently processing",
        icon: Clock3,
    },
    {
        label: "Completed Orders",
        value: "0",
        description: "Successfully delivered",
        icon: CheckCircle2,
    },
];

const accountLinks = [
    {
        title: "Personal Information",
        description: "Manage your name and contact details",
        href: "/account/profile",
        icon: UserRound,
    },
    {
        title: "My Orders",
        description: "View your order history and status",
        href: "/account/orders",
        icon: Package,
    },
    {
        title: "Change Password",
        description: "Update your account password",
        href: "/change-password",
        icon: Settings2,
    },
];

export default function AccountPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

                {/* Page Heading */}
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            My Account
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Welcome back!
                        </h1>
                        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                            Manage your account, track orders and explore your shopping activity.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Continue Shopping
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Account Overview */}
                <section className="mb-12">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Account Overview</h2>
                        <span className="text-xs text-muted-foreground">
                            Your shopping summary
                        </span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                {stat.label}
                                            </p>
                                            <p className="mt-3 text-3xl font-semibold tracking-tight">
                                                {stat.value}
                                            </p>
                                            <p className="mt-2 text-xs text-muted-foreground">
                                                {stat.description}
                                            </p>
                                        </div>

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Account Shortcuts */}
                <section className="mb-12">
                    <div className="mb-5">
                        <h2 className="text-lg font-semibold">Account Settings</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Everything you need to manage your account.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {accountLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/40"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition group-hover:bg-primary-soft group-hover:text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>

                                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* Recent Orders */}
                <section>
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">Recent Orders</h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Keep track of your latest purchases.
                            </p>
                        </div>

                        <Link
                            href="/account/orders"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition hover:opacity-75"
                        >
                            View All
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-border bg-card px-5 py-14 text-center sm:py-20">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                            <Box className="h-7 w-7 text-muted-foreground" />
                        </div>

                        <h3 className="text-lg font-semibold">No orders yet</h3>

                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                            Your shopping journey starts here. Explore our collection and
                            find your next favourite Panjabi.
                        </p>

                        <Link
                            href="/products"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                            Explore Collection
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}