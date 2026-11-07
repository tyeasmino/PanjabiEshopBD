
"use client";

import {
    ArrowLeft,
    ArrowRight,
    Minus,
    PackageCheck,
    Plus,
    ShieldCheck,
    ShoppingBag,
    Trash2,
    Truck,
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

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const loadCart = () => {
            const savedCart = localStorage.getItem("nextbuy-cart");

            if (savedCart) {
                setCart(JSON.parse(savedCart));
            } else {
                setCart([]);
            }
        };

        loadCart();
        setMounted(true);

        window.addEventListener("nextbuy-cart-updated", loadCart);

        return () => {
            window.removeEventListener("nextbuy-cart-updated", loadCart);
        };
    }, []);

    const updateCart = (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        localStorage.setItem("nextbuy-cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("nextbuy-cart-updated"));
    };

    const removeItem = (productId: number, size: string) => {
        const updatedCart = cart.filter(
            (item) => !(item.productId === productId && item.size === size)
        );

        updateCart(updatedCart);
    };

    const changeQuantity = (
        productId: number,
        size: string,
        amount: number
    ) => {
        const updatedCart = cart.map((item) => {
            if (item.productId === productId && item.size === size) {
                return {
                    ...item,
                    quantity: Math.min(10, Math.max(1, item.quantity + amount)),
                };
            }

            return item;
        });

        updateCart(updatedCart);
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const formatPrice = (price: number) =>
        `৳${price.toLocaleString("en-IN")}`;

    if (!mounted) {
        return <main className="min-h-[70vh]" />;
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">

                {/* Page Heading */}
                <div className="mb-10 border-b border-border pb-8 sm:mb-12 sm:pb-10">
                    <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        <span className="h-px w-7 bg-primary" />
                        Your Collection
                    </div>

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                Shopping Bag<span className="text-primary">.</span>
                            </h1>

                            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                                Your selected pieces, collected in one place.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <ShoppingBag size={18} strokeWidth={1.6} />
                            <span>
                                {totalItems} {totalItems === 1 ? "Item" : "Items"}
                            </span>
                        </div>
                    </div>
                </div>

                {cart.length === 0 ? (
                    /* Empty Cart */
                    <div className="mx-auto flex min-h-[430px] max-w-xl flex-col items-center justify-center py-16 text-center">
                        <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-border bg-card">
                            <ShoppingBag
                                size={42}
                                strokeWidth={1.2}
                                className="text-muted-foreground"
                            />
                            <span className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                0
                            </span>
                        </div>

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Nothing here yet
                        </p>

                        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            Your bag is waiting.
                        </h2>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                            Looks like you haven&apos;t added anything to your bag.
                            Explore our collection and find something you love.
                        </p>

                        <Link
                            href="/products"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                        >
                            Explore Collection
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">



                        {/* Cart Items */}
                        <section>
                            {/* Section Heading */}
                            <div className="mb-5 flex items-end justify-between">
                                <div>
                                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                                        Your Selection
                                    </p>
                                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                                        Shopping Bag
                                    </h2>
                                </div>

                                <span className="text-xs text-muted-foreground">
                                    {totalItems} {totalItems === 1 ? "item" : "items"}
                                </span>
                            </div>

                            {/* Product Cards */}
                            <div className="space-y-3">
                                {cart.map((item) => (
                                    <article
                                        key={`${item.productId}-${item.size}`}
                                        className="relative rounded-xl border border-border bg-card p-3 transition-colors duration-200 hover:border-primary/30"
                                    >

                                        {/* Floating Remove Button */}
                                        <button
                                            onClick={() => removeItem(item.productId, item.size)}
                                            aria-label={`Remove ${item.name}`}
                                            title="Remove item"
                                            className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-md transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <Trash2 size={14} strokeWidth={1.8} />
                                        </button>


                                        <div className="flex items-center gap-4">

                                            {/* Product Image */}
                                            <Link
                                                href={`/products/${item.productId}`}
                                                className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-lg bg-secondary"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="76px"
                                                    className="object-cover"
                                                />
                                            </Link>

                                            {/* Product Details */}
                                            <div className="min-w-0 flex-1">
                                                <Link
                                                    href={`/products/${item.productId}`}
                                                    className="line-clamp-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                                                >
                                                    {item.name}
                                                </Link>

                                                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span>
                                                        Size: <span className="font-semibold text-foreground">{item.size}</span>
                                                    </span>
                                                    <span className="text-border">|</span>
                                                    <span>{formatPrice(item.price)} / unit</span>
                                                </div>
                                            </div>

                                            {/* Quantity */}
                                            <div className="flex w-[100px] shrink-0 flex-col items-center gap-2">
                                                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                                    Quantity
                                                </span>

                                                <div className="flex h-8 items-center rounded-lg border border-border bg-background">
                                                    <button
                                                        onClick={() =>
                                                            changeQuantity(item.productId, item.size, -1)
                                                        }
                                                        disabled={item.quantity <= 1}
                                                        aria-label="Decrease quantity"
                                                        className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-primary disabled:opacity-30"
                                                    >
                                                        <Minus size={12} />
                                                    </button>

                                                    <span className="min-w-7 text-center text-xs font-semibold tabular-nums text-foreground">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            changeQuantity(item.productId, item.size, 1)
                                                        }
                                                        disabled={item.quantity >= 10}
                                                        aria-label="Increase quantity"
                                                        className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-primary disabled:opacity-30"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Subtotal */}
                                            <div className="w-[105px] shrink-0 text-right">
                                                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                                    Subtotal
                                                </p>
                                                <p className="mt-2 text-sm font-bold tabular-nums text-foreground">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                            </div>


                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Continue Shopping */}
                            <Link
                                href="/products"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                <ArrowLeft size={16} />
                                Continue Shopping
                            </Link>
                        </section>



                        {/* Order Summary */}
                        <aside className="lg:sticky lg:top-28">
                            <div className="overflow-hidden rounded-2xl border border-border bg-card">
                                <div className="border-b border-border px-6 py-6">
                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                                        Almost Yours
                                    </p>

                                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                                        Order Summary
                                    </h2>
                                </div>

                                <div className="space-y-5 px-6 py-6">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Subtotal ({totalItems} items)
                                        </span>
                                        <span className="font-semibold text-foreground">
                                            {formatPrice(subtotal)}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Delivery Charge
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            Calculated at checkout
                                        </span>
                                    </div>

                                    <div className="border-t border-dashed border-border pt-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-foreground">
                                                Estimated Total
                                            </span>
                                            <span className="text-2xl font-bold tracking-tight text-foreground">
                                                {formatPrice(subtotal)}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-right text-[11px] text-muted-foreground">
                                            Excluding delivery charge
                                        </p>
                                    </div>

                                    <button
                                        disabled
                                        className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground opacity-60"
                                    >
                                        Proceed to Checkout
                                        <ArrowRight size={17} />
                                    </button>

                                    <p className="text-center text-[11px] text-muted-foreground">
                                        Checkout will be available soon.
                                    </p>
                                </div>

                                {/* Trust Information */}
                                <div className="border-t border-border bg-secondary/50 px-6 py-5">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Truck
                                                size={18}
                                                strokeWidth={1.5}
                                                className="text-primary"
                                            />
                                            <span className="text-xs text-muted-foreground">
                                                Delivery details at checkout
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <ShieldCheck
                                                size={18}
                                                strokeWidth={1.5}
                                                className="text-primary"
                                            />
                                            <span className="text-xs text-muted-foreground">
                                                A simple and secure shopping experience
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <PackageCheck
                                                size={18}
                                                strokeWidth={1.5}
                                                className="text-primary"
                                            />
                                            <span className="text-xs text-muted-foreground">
                                                Your selected items in one place
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-5 text-center text-[11px] leading-5 text-muted-foreground">
                                Need help with your order? Our support section will be
                                available soon.
                            </p>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}
