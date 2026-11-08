"use client";

import {
    ArrowRight,
    CalendarDays,
    ChevronDown,
    ChevronRight,
    Clock3,
    Package,
    Search,
    ShoppingBag,
    Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type OrderStatus = "Processing" | "Shipped" | "Delivered" | "Cancelled";

type Order = {
    id: string;
    date: string;
    status: OrderStatus;
    payment: string;
    total: number;
    items: {
        name: string;
        image: string;
        price: number;
        quantity: number;
        size: string;
    }[];
};

// Demo data. Real orders will come from the backend API.
const orders: Order[] = [
    {
        id: "NB-2026-001",
        date: "09 Nov 2026",
        status: "Processing",
        payment: "Cash on Delivery",
        total: 2500,
        items: [
            {
                name: "Premium Panjabi Collection",
                image: "/images/products/01.jpeg",
                price: 1250,
                quantity: 2,
                size: "L",
            },
        ],
    },
    {
        id: "NB-2026-002",
        date: "05 Nov 2026",
        status: "Shipped",
        payment: "Cash on Delivery",
        total: 1230,
        items: [
            {
                name: "Elegant Panjabi",
                image: "/images/products/02.jpeg",
                price: 1150,
                quantity: 1,
                size: "XL",
            },
        ],
    },
    {
        id: "NB-2026-003",
        date: "28 Oct 2026",
        status: "Delivered",
        payment: "Cash on Delivery",
        total: 1430,
        items: [
            {
                name: "Classic Panjabi",
                image: "/images/products/03.jpeg",
                price: 1350,
                quantity: 1,
                size: "M",
            },
        ],
    },
];

const filters = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"];

const statusStyles: Record<OrderStatus, string> = {
    Processing: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    Shipped: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    Delivered: "bg-green-500/10 text-green-600 dark:text-green-400",
    Cancelled: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function OrdersPage() {
    const [activeFilter, setActiveFilter] = useState("All Orders");
    const [search, setSearch] = useState("");

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchesFilter =
                activeFilter === "All Orders" || order.status === activeFilter;

            const matchesSearch =
                order.id.toLowerCase().includes(search.toLowerCase()) ||
                order.items.some((item) =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                );

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, search]);

    const totalOrders = orders.length;
    const processingOrders = orders.filter(
        (order) => order.status === "Processing"
    ).length;
    const deliveredOrders = orders.filter(
        (order) => order.status === "Delivered"
    ).length;

    const formatPrice = (price: number) =>
        `৳${price.toLocaleString("en-BD")}`;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 lg:py-12">

                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
                    <Link href="/" className="hover:text-primary">
                        Home
                    </Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link href="/account" className="hover:text-primary">
                        My Account
                    </Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground">My Orders</span>
                </div>

                {/* Header */}
                <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Shopping Activity
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            My Orders
                        </h1>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Track your purchases and keep up with your deliveries.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Continue Shopping
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Order Statistics */}
                <section className="mb-10 grid gap-4 sm:grid-cols-3">
                    {[
                        {
                            label: "Total Orders",
                            value: totalOrders,
                            icon: ShoppingBag,
                        },
                        {
                            label: "Processing",
                            value: processingOrders,
                            icon: Clock3,
                        },
                        {
                            label: "Delivered",
                            value: deliveredOrders,
                            icon: Package,
                        },
                    ].map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="flex items-center justify-between rounded-2xl border border-border bg-card p-5"
                            >
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </p>
                                    <p className="mt-2 text-3xl font-semibold">
                                        {stat.value.toString().padStart(2, "0")}
                                    </p>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                                    <Icon className="h-5 w-5" />
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Orders Section */}
                <section>
                    <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                        <div>
                            <h2 className="text-lg font-semibold">Order History</h2>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {filteredOrders.length} orders found
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:max-w-xs">
                            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search order ID or product..."
                                className="w-full rounded-xl border border-input bg-card py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${activeFilter === filter
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Order Cards */}
                    <div className="space-y-5">
                        {filteredOrders.map((order) => (
                            <article
                                key={order.id}
                                className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/30"
                            >
                                {/* Order Header */}
                                <div className="flex flex-col gap-4 border-b border-border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                                Order ID
                                            </p>
                                            <p className="mt-1 text-sm font-semibold">
                                                {order.id}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                                Order Date
                                            </p>
                                            <p className="mt-1 flex items-center gap-1.5 text-sm">
                                                <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                                                {order.date}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                </div>

                                {/* Order Product */}
                                <div className="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                    <div className="flex min-w-0 items-center gap-4">
                                        <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
                                            <Image
                                                src={order.items[0].image}
                                                alt={order.items[0].name}
                                                fill
                                                sizes="80px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="line-clamp-2 text-sm font-semibold">
                                                {order.items[0].name}
                                            </h3>

                                            <p className="mt-2 text-xs text-muted-foreground">
                                                Size: {order.items[0].size}
                                            </p>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Quantity: {order.items[0].quantity}
                                            </p>

                                            {order.items.length > 1 && (
                                                <p className="mt-2 text-xs font-medium text-primary">
                                                    +{order.items.length - 1} more products
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-5 border-t border-border pt-4 sm:border-0 sm:pt-0">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                                Total Amount
                                            </p>
                                            <p className="mt-1 text-lg font-semibold">
                                                {formatPrice(order.total)}
                                            </p>
                                            <p className="mt-1 text-[11px] text-muted-foreground">
                                                {order.payment}
                                            </p>
                                        </div>

                                        <Link
                                            href={`/account/orders/${order.id}`}
                                            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold transition hover:border-primary hover:text-primary"
                                        >
                                            View Details
                                            <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* Empty State */}
                        {filteredOrders.length === 0 && (
                            <div className="rounded-2xl border border-border bg-card px-5 py-16 text-center">
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                                    <Package className="h-7 w-7 text-muted-foreground" />
                                </div>

                                <h3 className="text-lg font-semibold">
                                    No orders found
                                </h3>

                                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                                    We couldn&apos;t find any orders matching your search or selected filter.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveFilter("All Orders");
                                        setSearch("");
                                    }}
                                    className="mt-6 text-sm font-semibold text-primary hover:underline"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Bottom Note */}
                <div className="mt-9 flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
                    <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                        <h3 className="text-sm font-semibold">Need help with an order?</h3>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                            If you have questions about your purchase or delivery, visit our
                            <Link href="/contact" className="ml-1 font-semibold text-primary hover:underline">
                                Contact Us
                            </Link>
                            {" "}page.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}