import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Check,
    CheckCircle2,
    CreditCard,
    MapPin,
    Package,
    Phone,
    ShoppingBag,
    Truck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type OrderStatus = "Processing" | "Shipped" | "Delivered" | "Cancelled";

const demoOrders = [
    {
        id: "NB-2026-001",
        date: "09 Nov 2026",
        status: "Processing" as OrderStatus,
        payment: "Cash on Delivery",
        subtotal: 2500,
        delivery: 80,
        total: 2580,
        customer: "Customer Name",
        phone: "01XXXXXXXXX",
        address: "Your delivery address, Dhaka, Bangladesh",
        items: [
            {
                name: "Premium Panjabi Collection",
                image: "/images/products/01.jpeg",
                size: "L",
                quantity: 2,
                price: 1250,
            },
        ],
    },
    {
        id: "NB-2026-002",
        date: "05 Nov 2026",
        status: "Shipped" as OrderStatus,
        payment: "Cash on Delivery",
        subtotal: 1150,
        delivery: 80,
        total: 1230,
        customer: "Customer Name",
        phone: "01XXXXXXXXX",
        address: "Your delivery address, Dhaka, Bangladesh",
        items: [
            {
                name: "Elegant Panjabi",
                image: "/images/products/02.jpeg",
                size: "XL",
                quantity: 1,
                price: 1150,
            },
        ],
    },
    {
        id: "NB-2026-003",
        date: "28 Oct 2026",
        status: "Delivered" as OrderStatus,
        payment: "Cash on Delivery",
        subtotal: 1350,
        delivery: 80,
        total: 1430,
        customer: "Customer Name",
        phone: "01XXXXXXXXX",
        address: "Your delivery address, Dhaka, Bangladesh",
        items: [
            {
                name: "Classic Panjabi",
                image: "/images/products/03.jpeg",
                size: "M",
                quantity: 1,
                price: 1350,
            },
        ],
    },
];

const formatPrice = (price: number) =>
    `৳${price.toLocaleString("en-BD")}`;

const progressSteps = [
    { label: "Order Placed", icon: ShoppingBag },
    { label: "Processing", icon: Package },
    { label: "Shipped", icon: Truck },
    { label: "Delivered", icon: CheckCircle2 },
];

export default async function OrderDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const order = demoOrders.find((item) => item.id === id);

    if (!order) {
        notFound();
    }

    const currentStep =
        order.status === "Processing"
            ? 1
            : order.status === "Shipped"
                ? 2
                : order.status === "Delivered"
                    ? 3
                    : -1;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 lg:py-12">

                {/* Breadcrumb */}
                <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span>/</span>
                    <Link href="/account" className="hover:text-primary">My Account</Link>
                    <span>/</span>
                    <Link href="/account/orders" className="hover:text-primary">My Orders</Link>
                    <span>/</span>
                    <span className="text-foreground">{order.id}</span>
                </div>

                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <Link
                            href="/account/orders"
                            className="mb-5 inline-flex items-center gap-2 text-xs text-muted-foreground transition hover:text-primary"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back to Orders
                        </Link>

                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Order Information
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Order Details
                        </h1>

                        <p className="mt-3 text-sm text-muted-foreground">
                            Order ID: <span className="font-semibold text-foreground">{order.id}</span>
                        </p>
                    </div>

                    <span
                        className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${order.status === "Delivered"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : order.status === "Shipped"
                                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                : order.status === "Cancelled"
                                    ? "bg-red-500/10 text-red-600 dark:text-red-400"
                                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                            }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {order.status}
                    </span>
                </div>

                {/* Order Progress */}
                <section className="mb-8 rounded-2xl border border-border bg-card p-5 sm:p-8">
                    <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="text-lg font-semibold">Order Progress</h2>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Follow the progress of your purchase.
                            </p>
                        </div>

                        <p className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            {order.date}
                        </p>
                    </div>

                    {order.status === "Cancelled" ? (
                        <p className="rounded-xl bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
                            This order has been cancelled.
                        </p>
                    ) : (
                        <div className="grid grid-cols-4 gap-2">
                            {progressSteps.map((step, index) => {
                                const Icon = step.icon;
                                const completed = index <= currentStep;

                                return (
                                    <div key={step.label} className="relative text-center">
                                        <div
                                            className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${completed
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-secondary text-muted-foreground"
                                                }`}
                                        >
                                            {completed ? (
                                                <Check className="h-4 w-4" />
                                            ) : (
                                                <Icon className="h-4 w-4" />
                                            )}
                                        </div>

                                        <p
                                            className={`mt-3 text-[10px] font-medium sm:text-xs ${completed ? "text-foreground" : "text-muted-foreground"
                                                }`}
                                        >
                                            {step.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* Main Content */}
                <div className="grid items-start gap-7 lg:grid-cols-[1fr_350px]">

                    {/* Left Column */}
                    <div className="space-y-7">

                        {/* Products */}
                        <section className="overflow-hidden rounded-2xl border border-border bg-card">
                            <div className="border-b border-border px-5 py-5 sm:px-7">
                                <h2 className="text-base font-semibold">Ordered Items</h2>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    {order.items.length} product(s) in this order
                                </p>
                            </div>

                            <div className="divide-y divide-border">
                                {order.items.map((item, index) => (
                                    <div
                                        key={`${item.name}-${index}`}
                                        className="flex gap-4 p-5 sm:p-7"
                                    >
                                        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                sizes="96px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                                            <div>
                                                <h3 className="text-sm font-semibold">{item.name}</h3>
                                                <p className="mt-2 text-xs text-muted-foreground">
                                                    Size: {item.size}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    Quantity: {item.quantity}
                                                </p>
                                            </div>

                                            <div className="sm:text-right">
                                                <p className="text-sm font-semibold">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {formatPrice(item.price)} each
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Delivery Information */}
                        <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="text-base font-semibold">Delivery Information</h2>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Where your order will be delivered.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        Customer Name
                                    </p>
                                    <p className="mt-1 text-sm font-medium">{order.customer}</p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        Phone Number
                                    </p>
                                    <p className="mt-1 flex items-center gap-2 text-sm">
                                        <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                                        {order.phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        Delivery Address
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        {order.address}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <aside className="space-y-6">

                        {/* Price Summary */}
                        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                            <h2 className="mb-6 text-base font-semibold">Order Summary</h2>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between gap-3 text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(order.subtotal)}</span>
                                </div>

                                <div className="flex justify-between gap-3 text-muted-foreground">
                                    <span>Delivery Charge</span>
                                    <span>{formatPrice(order.delivery)}</span>
                                </div>

                                <div className="border-t border-border pt-4">
                                    <div className="flex justify-between gap-3 font-semibold">
                                        <span>Total Amount</span>
                                        <span className="text-primary">{formatPrice(order.total)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-3 rounded-xl bg-secondary p-4">
                                <CreditCard className="h-5 w-5 shrink-0 text-primary" />
                                <div>
                                    <p className="text-xs font-semibold">Payment Method</p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {order.payment}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Help Card */}
                        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                                <Truck className="h-5 w-5" />
                            </div>

                            <h3 className="text-sm font-semibold">Need assistance?</h3>

                            <p className="mt-2 text-xs leading-6 text-muted-foreground">
                                Have a question about your order? Our team can help you.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                            >
                                Contact Support
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </section>

                    </aside>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/account/orders"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Orders
                    </Link>

                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        Continue Shopping
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </main>
    );
}