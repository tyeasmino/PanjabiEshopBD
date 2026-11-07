
"use client";

import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    CreditCard,
    MapPin,
    Package,
    ShieldCheck,
    ShoppingBag,
    Truck,
    UserRound
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
    productId: number;
    name: string;
    image: string;
    price: number;
    size: string;
    quantity: number;
};

const DELIVERY_CHARGE = 80;

const formatPrice = (price: number) =>
    `৳${price.toLocaleString("en-BD")}`;

export default function CheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        district: "",
        area: "",
        address: "",
        note: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("cod");

    useEffect(() => {
        const savedCart = localStorage.getItem("nextbuy-cart");

        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch {
                setCart([]);
            }
        }

        setMounted(true);
    }, []);

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const deliveryCharge = cart.length > 0 ? DELIVERY_CHARGE : 0;
    const total = subtotal + deliveryCharge;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert("Checkout UI is ready. Order placement will be connected later.");
    };

    if (!mounted) {
        return <main className="min-h-screen bg-background" />;
    }

    if (cart.length === 0) {
        return (
            <main className="flex min-h-[75vh] items-center justify-center bg-background px-5">
                <div className="max-w-md text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                        <ShoppingBag size={26} className="text-muted-foreground" />
                    </div>

                    <h1 className="text-2xl font-semibold text-foreground">
                        Your bag is empty
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        Add something from our collection before proceeding to checkout.
                    </p>

                    <Link
                        href="/products"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground"
                    >
                        Explore Products
                        <ArrowRight size={15} />
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12">

                {/* Breadcrumb */}
                <div className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
                    <Link href="/" className="hover:text-primary">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/cart" className="hover:text-primary">
                        Cart
                    </Link>
                    <span>/</span>
                    <span className="font-medium text-foreground">
                        Checkout
                    </span>
                </div>

                {/* Page Heading */}
                <div className="mb-10 border-b border-border pb-8">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                        Complete your purchase / 01
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Checkout
                    </h1>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                        Almost there. Provide your delivery details to complete your order.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_420px]">

                        {/* LEFT: CUSTOMER DETAILS */}
                        <div className="space-y-10">

                            {/* Contact Information */}
                            <section>
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <UserRound size={18} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-semibold text-foreground">
                                            Contact Information
                                        </h2>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            How can we reach you?
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            Full Name <span className="text-primary">*</span>
                                        </label>

                                        <input
                                            name="fullName"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                            autoComplete="name"
                                            className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            Phone Number <span className="text-primary">*</span>
                                        </label>

                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="01XXXXXXXXX"
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            Email Address
                                        </label>

                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com"
                                            type="email"
                                            autoComplete="email"
                                            className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Delivery Address */}
                            <section className="border-t border-border pt-9">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <MapPin size={18} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-semibold text-foreground">
                                            Delivery Address
                                        </h2>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Where should we deliver your order?
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            District <span className="text-primary">*</span>
                                        </label>

                                        <input
                                            name="district"
                                            value={form.district}
                                            onChange={handleChange}
                                            placeholder="e.g. Dhaka"
                                            required
                                            autoComplete="address-level1"
                                            className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            Area / Thana <span className="text-primary">*</span>
                                        </label>

                                        <input
                                            name="area"
                                            value={form.area}
                                            onChange={handleChange}
                                            placeholder="e.g. Mirpur"
                                            required
                                            autoComplete="address-level2"
                                            className="h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            Street Address <span className="text-primary">*</span>
                                        </label>

                                        <textarea
                                            name="address"
                                            value={form.address}
                                            onChange={handleChange}
                                            placeholder="House number, road, building, apartment..."
                                            required
                                            rows={3}
                                            autoComplete="street-address"
                                            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-xs font-medium text-foreground">
                                            Order Note <span className="text-muted-foreground">(Optional)</span>
                                        </label>

                                        <textarea
                                            name="note"
                                            value={form.note}
                                            onChange={handleChange}
                                            placeholder="Any special delivery instructions..."
                                            rows={2}
                                            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Payment Method */}
                            <section className="border-t border-border pt-9">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CreditCard size={18} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-semibold text-foreground">
                                            Payment Method
                                        </h2>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Choose how you want to pay.
                                        </p>
                                    </div>
                                </div>

                                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-primary bg-primary/5 p-5">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="h-4 w-4 accent-[#FC6900]"
                                    />

                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-card text-primary">
                                        <Package size={20} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-foreground">
                                            Cash on Delivery
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Pay when your order arrives.
                                        </p>
                                    </div>

                                    <CheckCircle2 size={19} className="text-primary" />
                                </label>
                            </section>

                        </div>

                        {/* RIGHT: ORDER SUMMARY */}
                        <aside className="lg:sticky lg:top-28">
                            <div className="overflow-hidden rounded-2xl border border-border bg-card">

                                <div className="border-b border-border px-6 py-5">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-base font-semibold text-foreground">
                                            Order Summary
                                        </h2>

                                        <span className="text-xs text-muted-foreground">
                                            {totalItems} items
                                        </span>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="max-h-[340px] space-y-5 overflow-y-auto px-6 py-6">
                                    {cart.map((item) => (
                                        <div
                                            key={`${item.productId}-${item.size}`}
                                            className="flex gap-4"
                                        >
                                            <div className="relative h-[76px] w-[68px] shrink-0 overflow-hidden rounded-lg bg-secondary">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="68px"
                                                    className="object-cover"
                                                />

                                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-semibold text-background">
                                                    {item.quantity}
                                                </span>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="line-clamp-2 text-sm font-medium leading-5 text-foreground">
                                                    {item.name}
                                                </p>

                                                <p className="mt-2 text-[11px] text-muted-foreground">
                                                    Size: {item.size} · Qty: {item.quantity}
                                                </p>

                                                <p className="mt-2 text-xs font-semibold text-foreground">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Price Breakdown */}
                                <div className="border-t border-border px-6 py-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-muted-foreground">
                                                Subtotal
                                            </span>
                                            <span className="font-medium text-foreground">
                                                {formatPrice(subtotal)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-xs">
                                            <span className="text-muted-foreground">
                                                Delivery Charge
                                            </span>
                                            <span className="font-medium text-foreground">
                                                {formatPrice(deliveryCharge)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                                        <span className="text-sm font-semibold text-foreground">
                                            Total
                                        </span>

                                        <span className="text-xl font-bold tracking-tight text-foreground">
                                            {formatPrice(total)}
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-7 flex h-13 w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-all duration-300 hover:opacity-90"
                                    >
                                        Place Order
                                        <ArrowRight size={16} />
                                    </button>

                                    <Link
                                        href="/cart"
                                        className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <ArrowLeft size={14} />
                                        Return to Cart
                                    </Link>
                                </div>
                            </div>

                            {/* Trust Information */}
                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                                    <ShieldCheck size={17} className="shrink-0 text-primary" />
                                    <span className="text-[10px] font-medium leading-4 text-muted-foreground">
                                        Secure checkout
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                                    <Truck size={17} className="shrink-0 text-primary" />
                                    <span className="text-[10px] font-medium leading-4 text-muted-foreground">
                                        Reliable delivery
                                    </span>
                                </div>
                            </div>
                        </aside>

                    </div>
                </form>

            </div>
        </main>
    );
}
