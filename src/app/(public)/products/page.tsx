
"use client";

import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpDown,
    Search,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import ProductCard from "@/components/products/product-card";
import { products } from "@/data/products";

type SortOption = "featured" | "price-low" | "price-high" | "name";

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Products");
    const [sortBy, setSortBy] = useState<SortOption>("featured");

    const categories = [
        { name: "All Products", count: products.length },
        {
            name: "Panjabi",
            count: products.filter((p) =>
                p.name.toLowerCase().includes("panjabi")
            ).length,
        },
    ];

    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (category === "Panjabi") {
            result = result.filter((p) =>
                p.name.toLowerCase().includes("panjabi")
            );
        }

        if (search.trim()) {
            result = result.filter((p) =>
                p.name.toLowerCase().includes(search.trim().toLowerCase())
            );
        }

        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;
            case "name":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                result.sort((a, b) => a.id - b.id);
        }

        return result;
    }, [search, category, sortBy]);

    // First product becomes the editorial featured product.
    const featuredProduct =
        !search && category === "All Products" && sortBy === "featured"
            ? filteredProducts[0]
            : null;

    const regularProducts = featuredProduct
        ? filteredProducts.filter((p) => p.id !== featuredProduct.id)
        : filteredProducts;

    const discount = featuredProduct
        ? Math.round(
            ((featuredProduct.originalPrice - featuredProduct.price) /
                featuredProduct.originalPrice) *
            100
        )
        : 0;

    const formatPrice = (price: number) =>
        `৳${price.toLocaleString("en-BD")}`;

    return (
        <main className="min-h-screen bg-background">

            {/* ================= EDITORIAL HERO ================= */}
            <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8 sm:pt-10 lg:px-12">

                <div className="grid min-h-[440px] overflow-hidden bg-[#25221F] lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Hero Text */}
                    <div className="relative flex flex-col justify-center px-7 py-12 text-[#F5F0E8] sm:px-12 lg:px-14 lg:py-16">

                        <div className="mb-9 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#FC914D]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FC914D]">
                                NextBuy / The Collection
                            </span>
                        </div>

                        <h1 className="max-w-lg text-5xl font-light leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
                            Wear your
                            <br />
                            <span className="font-semibold italic text-[#FC914D]">
                                identity.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-sm text-sm leading-7 text-[#C5BDB4]">
                            A collection inspired by timeless style and
                            contemporary expression. Find pieces that
                            speak your language.
                        </p>

                        <div className="mt-10">
                            <a
                                href="#catalog"
                                className="group inline-flex items-center gap-4 border-b border-[#FC914D] pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F0E8] transition-colors hover:text-[#FC914D]"
                            >
                                Explore the collection
                                <ArrowDownRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                                />
                            </a>
                        </div>

                        <span className="absolute bottom-7 right-8 hidden text-[10px] tracking-[0.2em] text-[#82776C] lg:block">
                            NB — EST. 2026
                        </span>
                    </div>

                    {/* Hero Image */}
                    <div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]">
                        <Image
                            src="/images/hero-panjabi.png"
                            alt="NextBuy fashion collection"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

                        <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white sm:bottom-9 sm:left-9">
                            <span className="h-px w-8 bg-white/70" />
                            <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
                                Discover your style
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CATALOG ================= */}
            <section
                id="catalog"
                className="mx-auto max-w-[1440px] px-4 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12"
            >

                {/* Section Intro */}
                <div className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                            Curated for you / 01
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            The Collection
                        </h2>
                    </div>

                    <p className="max-w-xs text-sm leading-6 text-muted-foreground sm:text-right">
                        Explore the pieces. Discover the details.
                        Find your next favorite.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[210px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)]">

                    {/* ================= SIDEBAR ================= */}
                    <aside className="lg:sticky lg:top-28 lg:h-fit">

                        <div className="mb-7">
                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Browse by category
                            </p>

                            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
                                {categories.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => setCategory(item.name)}
                                        className={`flex shrink-0 items-center justify-between gap-4 border-b px-3 py-3 text-left text-sm transition-all lg:px-0 ${category === item.name
                                            ? "border-primary font-semibold text-primary"
                                            : "border-border text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        <span>{item.name}</span>
                                        <span className="text-[10px] tabular-nums opacity-70">
                                            {String(item.count).padStart(2, "0")}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="hidden border-t border-border pt-7 lg:block">
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Search collection
                            </p>

                            <div className="relative">
                                <Search
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />

                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Find a product..."
                                    className="h-11 w-full rounded-none border-b border-border bg-transparent pl-9 pr-8 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                                />

                                {search && (
                                    <button
                                        onClick={() => setSearch("")}
                                        aria-label="Clear search"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 hidden border-t border-border pt-6 lg:block">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                NextBuy
                            </p>
                            <p className="mt-3 text-xs leading-6 text-muted-foreground">
                                Style is personal. Explore the collection
                                and choose what feels right for you.
                            </p>
                        </div>
                    </aside>

                    {/* ================= PRODUCT CONTENT ================= */}
                    <div className="min-w-0">

                        {/* Toolbar */}
                        <div className="mb-7 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">

                            {/* Mobile Search */}
                            <div className="relative lg:hidden">
                                <Search
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />

                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search products..."
                                    className="h-11 w-full rounded-lg border border-border bg-card pl-9 pr-9 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                                />

                                {search && (
                                    <button
                                        onClick={() => setSearch("")}
                                        aria-label="Clear search"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-foreground">
                                    {category}
                                </p>
                                <p className="mt-1 text-[11px] text-muted-foreground">
                                    {filteredProducts.length} products available
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <ArrowUpDown
                                    size={14}
                                    className="text-muted-foreground"
                                />

                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value as SortOption)
                                    }
                                    className="h-10 flex-1 border-b border-border bg-transparent text-xs text-foreground outline-none focus:border-primary sm:flex-none"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name: A to Z</option>
                                </select>
                            </div>
                        </div>

                        {/* Featured + Regular Products */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-7">

                                {/* Large Editorial Featured Product */}
                                {featuredProduct && (
                                    <Link
                                        href={`/products/${featuredProduct.id}`}
                                        className="group relative col-span-2 overflow-hidden bg-[#26231F] lg:row-span-2"
                                    >
                                        <div className="relative aspect-[1.15/1] h-full min-h-[360px] w-full sm:min-h-[440px] lg:min-h-[620px]">
                                            <Image
                                                src={featuredProduct.image}
                                                alt={featuredProduct.name}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 65vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />

                                            <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-8">
                                                <span className="bg-[#FC6900] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                                                    {featuredProduct.badge || "Featured"}
                                                </span>

                                                {discount > 0 && (
                                                    <span className="border border-white/40 bg-black/30 px-3 py-1.5 text-[9px] font-semibold text-white backdrop-blur-sm">
                                                        {discount}% OFF
                                                    </span>
                                                )}
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                                                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FC914D]">
                                                    Editor&apos;s Selection
                                                </p>

                                                <h3 className="max-w-md text-2xl font-semibold leading-tight sm:text-4xl">
                                                    {featuredProduct.name}
                                                </h3>

                                                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/30 pt-5">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-lg font-semibold">
                                                            {formatPrice(featuredProduct.price)}
                                                        </span>

                                                        {discount > 0 && (
                                                            <span className="text-sm text-white/60 line-through">
                                                                {formatPrice(featuredProduct.originalPrice)}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 transition-all group-hover:border-[#FC6900] group-hover:bg-[#FC6900]">
                                                        <ArrowRight size={18} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                                {/* Remaining Products */}
                                {regularProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}

                            </div>
                        ) : (
                            <div className="flex min-h-[360px] flex-col items-center justify-center border border-dashed border-border px-5 text-center">
                                <Search size={28} className="mb-5 text-muted-foreground" />

                                <h3 className="text-lg font-semibold text-foreground">
                                    No products found
                                </h3>

                                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                                    Try another search keyword or clear your filters.
                                </p>

                                <button
                                    onClick={() => {
                                        setSearch("");
                                        setCategory("All Products");
                                        setSortBy("featured");
                                    }}
                                    className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 text-xs font-semibold text-primary"
                                >
                                    Clear filters
                                    <X size={14} />
                                </button>
                            </div>
                        )}

                        {/* Collection Footer */}
                        {filteredProducts.length > 0 && (
                            <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
                                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                    NextBuy / End of collection
                                </p>

                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 text-xs font-semibold text-foreground transition-colors hover:text-primary"
                                >
                                    Back Home
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
