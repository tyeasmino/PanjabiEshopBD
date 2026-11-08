"use client";

import {
    ArrowRight,
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    CreditCard,
    MapPin,
    Package,
    ShoppingBag,
    Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type OrderItem = {
    productId: number;
    name: string;
    image: string;
    price: number;
    size: string;
    quantity: number;
};

type Order = {
    id: string;
    date: string;
    status: string;
    paymentMethod: string;
    customer: {
        name: string;
        phone: string;
        email: string;
        district: string;
        area: string;
        address: string;
        note: string;
    };
    items: OrderItem[];
    subtotal: number;
    deliveryCharge: number;
    total: number;
};

const formatPrice = (price: number) =>
    `৳${price.toLocaleString("en-BD")}`;

export default function OrderSuccessPage() {
    const [order, setOrder] = useState<Order | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        try {
            const savedOrder = localStorage.getItem("nextbuy-latest-order");

            if (savedOrder) {
                setOrder(JSON.parse(savedOrder));
            }
        } catch {
            setOrder(null);
        }

        setLoaded(true);
    }, []);

    if (!loaded) {
        return <main className="min-h-screen bg-background" />;
    }

    if (!order) {
        return (
            <main className="flex min-h-[75vh] items-center justify-center bg-background px-5">
                <div className="max-w-md text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                        <Package size={27} className="text-muted-foreground" />
                    </div>

                    <h1 className="text-2xl font-semibold text-foreground">
                        No order found
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        We could not find a recent order. Please complete checkout first.
                    </p>

                    <Link
                        href="/products"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                    >
                        Explore Products
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </main>
        );
    }

    const orderDate = new Date(order.date).toLocaleDateString("en-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const deliveryAddress = [
        order.customer.address,
        order.customer.area,
        order.customer.district,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <main className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:py-16">
            <div className="mx-auto max-w-5xl">
                {/* Success Header */}
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2
                            className="h-11 w-11 text-primary"
                            strokeWidth={1.7}
                        />
                    </div>

                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        Order Confirmation
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Thank You for Your Order!
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                        Your order has been successfully submitted. We appreciate your
                        trust in Panjabi Eshop BD. You can review your order details below.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                        <BadgeCheck className="h-4 w-4" />
                        Order Confirmed
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
                    <div className="space-y-6">
                        {/* Order Information */}
                        <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        Order Number
                                    </p>

                                    <h2 className="mt-2 break-all text-xl font-bold text-foreground">
                                        {order.id}
                                    </h2>
                                </div>

                                <div className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                                    {order.status}
                                </div>
                            </div>

                            <div className="grid gap-5 pt-5 sm:grid-cols-2">
                                <div className="flex items-start gap-3">
                                    <div className="rounded-lg bg-secondary p-2.5">
                                        <CalendarDays className="h-5 w-5 text-foreground" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Order Date
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-foreground">
                                            {orderDate}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="rounded-lg bg-secondary p-2.5">
                                        <CreditCard className="h-5 w-5 text-foreground" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Payment Method
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-foreground">
                                            {order.paymentMethod}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Ordered Products */}
                        <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
                            <div className="mb-6 flex items-center gap-2">
                                <ShoppingBag className="h-5 w-5 text-primary" />
                                <h2 className="text-lg font-bold text-foreground">
                                    Order Summary
                                </h2>
                                <span className="ml-auto text-xs text-muted-foreground">
                                    {order.items.length} products
                                </span>
                            </div>

                            <div className="space-y-6">
                                {order.items.map((item) => (
                                    <div
                                        key={`${item.productId}-${item.size}`}
                                        className="flex gap-4"
                                    >
                                        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-32 sm:w-28">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                sizes="112px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                                            <div>
                                                <h3 className="font-semibold text-foreground">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    Size: {item.size}
                                                </p>

                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    Quantity: {item.quantity}
                                                </p>
                                            </div>

                                            <p className="mt-3 font-bold text-foreground">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                                <div className="flex justify-between gap-4 text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(order.subtotal)}</span>
                                </div>

                                <div className="flex justify-between gap-4 text-muted-foreground">
                                    <span>Delivery Charge</span>
                                    <span>{formatPrice(order.deliveryCharge)}</span>
                                </div>

                                <div className="flex justify-between gap-4 border-t border-border pt-4 text-base font-bold text-foreground">
                                    <span>Total Amount</span>
                                    <span className="text-primary">
                                        {formatPrice(order.total)}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Delivery Information */}
                        <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
                            <div className="mb-5 flex items-center gap-2">
                                <Truck className="h-5 w-5 text-primary" />
                                <h2 className="text-lg font-bold text-foreground">
                                    Delivery Information
                                </h2>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-secondary p-2.5">
                                    <MapPin className="h-5 w-5 text-foreground" />
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground">
                                        {order.customer.name}
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {order.customer.phone}
                                    </p>

                                    {order.customer.email && (
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {order.customer.email}
                                        </p>
                                    )}

                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {deliveryAddress}
                                    </p>

                                    {order.customer.note && (
                                        <p className="mt-3 text-sm text-muted-foreground">
                                            <span className="font-semibold text-foreground">
                                                Order Note:
                                            </span>{" "}
                                            {order.customer.note}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="space-y-5">
                        <section className="rounded-2xl bg-[#252526] p-6 text-white sm:p-7">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                                <Package className="h-6 w-6 text-primary" />
                            </div>

                            <p className="text-sm text-white/60">Your order total</p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {formatPrice(order.total)}
                            </h2>

                            <div className="my-6 border-t border-white/15" />

                            <div className="flex items-center justify-between gap-3 text-sm">
                                <span className="text-white/60">Payment</span>
                                <span className="text-right font-medium">
                                    {order.paymentMethod}
                                </span>
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                                <span className="text-white/60">Status</span>
                                <span className="font-medium text-primary">
                                    {order.status}
                                </span>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-border bg-card p-6">
                            <h3 className="font-bold text-foreground">
                                What happens next?
                            </h3>

                            <div className="mt-5 space-y-5">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            Order received
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                            Your order information has been submitted.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Package className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            Order processing
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                            Your items will be prepared for delivery.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Truck className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            On the way
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                            Your order will be delivered to your address.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="space-y-3">
                            <Link
                                href={`/account/orders/${order.id}`}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                            >
                                Track Your Order
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/products"
                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
                            >
                                Continue Shopping
                                <ShoppingBag className="h-4 w-4" />
                            </Link>
                        </div>
                    </aside>
                </div>

                <p className="mt-10 text-center text-xs leading-6 text-muted-foreground">
                    Need help with your order?{" "}
                    <Link
                        href="/contact"
                        className="font-semibold text-primary hover:underline"
                    >
                        Contact our support team
                    </Link>
                </p>
            </div>
        </main>
    );
}