
"use client";

import ProductCard from "@/components/products/product-card";
import type { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
    product: Product;
    relatedProducts: Product[];
};

export default function ProductDetails({
    product,
    relatedProducts,
}: Props) {
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const discount =
        product.originalPrice > product.price
            ? Math.round(
                ((product.originalPrice - product.price) /
                    product.originalPrice) *
                100
            )
            : 0;

    const addToCart = () => {
        if (!selectedSize) return;

        const cartItem = {
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            size: selectedSize,
            quantity,
        };

        try {
            const existingCart = JSON.parse(
                localStorage.getItem("nextbuy-cart") || "[]"
            );

            const existingItem = existingCart.find(
                (item: typeof cartItem) =>
                    item.productId === cartItem.productId &&
                    item.size === cartItem.size
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                existingCart.push(cartItem);
            }

            localStorage.setItem(
                "nextbuy-cart",
                JSON.stringify(existingCart)
            );

            window.dispatchEvent(new Event("nextbuy-cart-updated"));
            setAdded(true);
        } catch {
            setAdded(false);
        }
    };

    return (
        <main className="min-h-screen bg-background">

            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-5 pt-7 sm:px-8">
                <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <Link href="/" className="hover:text-primary">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-primary">
                        Products
                    </Link>
                    <span>/</span>
                    <span className="max-w-45 truncate text-foreground">
                        {product.name}
                    </span>
                </nav>
            </div>

            {/* Main Product Section */}
            <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 md:py-14">
                <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

                    {/* Product Image */}
                    <div className="min-w-0">
                        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40">
                            <div className="relative aspect-4/5 w-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                    className="object-contain p-3 sm:p-5"
                                />

                                {discount > 0 && (
                                    <div className="absolute left-4 top-4 rounded-lg border border-[#9B542F] bg-[#211C19] px-3.5 py-2.5 shadow-lg">
                                        <p className="text-sm font-extrabold text-[#FF914D]">
                                            {discount}% OFF
                                        </p>
                                        <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-widest text-[#C4A18C]">
                                            Special Price
                                        </p>
                                    </div>
                                )}

                                <span className="absolute bottom-4 right-4 rounded-full border border-border bg-background/90 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                                    NEXTBUY COLLECTION
                                </span>
                            </div>
                        </div>

                        <p className="mt-3 text-center text-xs text-muted-foreground">
                            Product image · Actual product may vary slightly
                        </p>
                    </div>

                    {/* Product Information */}
                    <div className="flex min-w-0 flex-col lg:py-5">

                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                            NextBuy / Fashion
                        </p>

                        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl xl:text-5xl">
                            {product.name}
                        </h1>

                        <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                            Discover timeless style with this elegant Panjabi.
                            Designed to bring together a refined look and everyday
                            comfort for your special moments.
                        </p>

                        {/* Price */}
                        <div className="mt-7 flex flex-wrap items-center gap-3 border-b border-border pb-7">
                            <span className="text-3xl font-bold tracking-tight text-foreground">
                                ৳{product.price.toLocaleString("en-BD")}
                            </span>

                            {discount > 0 && (
                                <>
                                    <span className="text-base text-muted-foreground line-through">
                                        ৳{product.originalPrice.toLocaleString("en-BD")}
                                    </span>

                                    <span className="rounded-md border border-primary-soft-border bg-primary-soft px-3 py-1.5 text-xs font-bold text-primary-soft-foreground">
                                        Save {discount}%
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Size Selection */}
                        <div className="mt-7">
                            <div className="flex items-center justify-between gap-3">
                                <label className="text-sm font-bold text-foreground">
                                    Select Size
                                </label>

                                <details className="group relative">
                                    <summary className="cursor-pointer list-none text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-primary">
                                        Size Guide
                                    </summary>

                                    <div className="absolute right-0 top-7 z-20 w-64 rounded-xl border border-border bg-card p-4 shadow-xl">
                                        <p className="text-sm font-semibold text-foreground">
                                            Size Guide
                                        </p>
                                        <p className="mt-2 text-xs leading-6 text-muted-foreground">
                                            Please check the actual measurements before
                                            selecting your size. Contact us if you need help.
                                        </p>
                                    </div>
                                </details>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {["M", "L", "XL", "XXL"].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => {
                                            setSelectedSize(size);
                                            setAdded(false);
                                        }}
                                        aria-pressed={selectedSize === size}
                                        className={`flex h-12 min-w-14 items-center justify-center rounded-lg border px-4 text-sm font-semibold transition-all ${selectedSize === size
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-border bg-card text-foreground hover:border-primary hover:bg-primary-soft"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            {!selectedSize && (
                                <p className="mt-3 text-xs text-muted-foreground">
                                    Please select your preferred size.
                                </p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div className="mt-7">
                            <p className="text-sm font-bold text-foreground">
                                Quantity
                            </p>

                            <div className="mt-3 flex h-12 w-fit items-center overflow-hidden rounded-lg border border-border">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setQuantity((current) => Math.max(1, current - 1));
                                        setAdded(false);
                                    }}
                                    disabled={quantity <= 1}
                                    aria-label="Decrease quantity"
                                    className="h-full w-12 text-lg text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
                                >
                                    −
                                </button>

                                <span className="flex h-full w-12 items-center justify-center border-x border-border text-sm font-semibold text-foreground">
                                    {quantity}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setQuantity((current) => Math.min(10, current + 1));
                                        setAdded(false);
                                    }}
                                    disabled={quantity >= 10}
                                    aria-label="Increase quantity"
                                    className="h-full w-12 text-lg text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add To Cart */}
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={addToCart}
                                disabled={!selectedSize}
                                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:brightness-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {added ? "Added to Cart ✓" : "Add to Cart"}
                                {!added && <span aria-hidden="true">↗</span>}
                            </button>

                            {added && (
                                <p className="mt-3 text-center text-xs font-medium text-primary">
                                    Added successfully · Size {selectedSize} · Quantity {quantity}
                                </p>
                            )}
                        </div>

                        {/* Store Information */}
                        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6">
                            <div className="rounded-xl bg-secondary/60 p-4">
                                <p className="text-xs font-bold text-foreground">
                                    Delivery
                                </p>
                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                    Delivery details at checkout
                                </p>
                            </div>

                            <div className="rounded-xl bg-secondary/60 p-4">
                                <p className="text-xs font-bold text-foreground">
                                    Need Help?
                                </p>
                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                    Contact us for product assistance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Information */}
            <section className="border-t border-border bg-card/40">
                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        Know More
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                        Product Details
                    </h2>

                    <p className="mt-5 max-w-3xl text-sm leading-8 text-muted-foreground sm:text-base">
                        {product.name} is part of the NextBuy collection.
                        Explore the design, choose your preferred size and
                        enjoy a style that suits your occasion.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {[
                            ["Collection", "NextBuy Fashion"],
                            ["Product Type", "Panjabi"],
                            ["Available Sizes", "M, L, XL, XXL"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-xl border border-border bg-background p-5"
                            >
                                <p className="text-xs text-muted-foreground">{label}</p>
                                <p className="mt-2 text-sm font-semibold text-foreground">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
                    <div className="mb-9 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Complete Your Look
                            </p>
                            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                                You May Also Like
                            </h2>
                        </div>

                        <Link
                            href="/products"
                            className="shrink-0 text-xs font-semibold text-foreground transition-colors hover:text-primary sm:text-sm"
                        >
                            View All ↗
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
                        {relatedProducts.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
