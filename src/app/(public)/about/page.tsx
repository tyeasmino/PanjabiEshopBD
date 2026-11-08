
import {
    ArrowRight,
    Heart,
    PackageCheck,
    Shirt,
    ShoppingBag,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const brandValues = [
    {
        number: "01",
        icon: Shirt,
        title: "Panjabi Focused",
        description:
            "A collection centered around Panjabi styles, bringing traditional fashion into a modern shopping experience.",
    },
    {
        number: "02",
        icon: Sparkles,
        title: "Style & Elegance",
        description:
            "Discover styles that celebrate timeless design, thoughtful details, and personal expression.",
    },
    {
        number: "03",
        icon: ShoppingBag,
        title: "Easy Shopping",
        description:
            "Explore products, discover your preferred styles, and enjoy a simple online shopping journey.",
    },
    {
        number: "04",
        icon: Heart,
        title: "Customer First",
        description:
            "We aim to make every step of your shopping experience clear, convenient, and welcoming.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-background">

            {/* Hero Section */}
            <section className="relative border-b border-border">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">

                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-primary" />
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                About Our Brand
                            </p>
                        </div>

                        <h1 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Tradition meets
                            <span className="block text-primary">
                                modern style.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                            Welcome to Panjabi Eshop BD — your online destination
                            for exploring Panjabi fashion. We bring together
                            traditional inspiration and modern style to make
                            discovering your next favorite Panjabi easier.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                            >
                                Explore Collection
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary p-2">
                            <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                                <Image
                                    src="/images/hero-panjabi.png"
                                    alt="Panjabi Eshop BD fashion collection"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-3 rounded-xl border border-border bg-card px-5 py-4 shadow-xl sm:-left-7">
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Our Identity
                            </p>
                            <p className="mt-1 text-lg font-semibold text-foreground">
                                Panjabi Eshop BD
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Brand Story */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Who We Are
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                            More than just
                            <span className="block text-muted-foreground">
                                a clothing store.
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-5">
                        <p className="text-base leading-8 text-muted-foreground">
                            At Panjabi Eshop BD, we believe that clothing is
                            more than what we wear. It is a reflection of
                            culture, personality, and individual style.
                        </p>

                        <p className="text-base leading-8 text-muted-foreground">
                            Our focus is on Panjabi fashion — a timeless part
                            of traditional wear that continues to find its
                            place in modern wardrobes. We aim to make
                            exploring different Panjabi styles convenient
                            through an accessible online shopping experience.
                        </p>

                        <p className="text-base leading-8 text-muted-foreground">
                            Whether you are looking for a traditional look
                            or something with a contemporary touch, we want
                            to help you discover styles that feel right for you.
                        </p>
                    </div>

                </div>
            </section>

            {/* Brand Values */}
            <section className="border-y border-border bg-secondary/40">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            What Matters To Us
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            The values behind our brand.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                            Every part of our shopping experience is guided
                            by a simple goal: making Panjabi shopping easier
                            and more enjoyable.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {brandValues.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article
                                    key={value.number}
                                    className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon size={23} strokeWidth={1.6} />
                                        </div>

                                        <span className="text-xs font-semibold tracking-widest text-muted-foreground/60">
                                            {value.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-8 text-lg font-semibold text-foreground">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                        {value.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shopping Experience */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    <div className="order-2 lg:order-1">
                        <div className="rounded-2xl border border-border bg-secondary/50 p-7 sm:p-10">

                            <div className="flex items-center gap-4 border-b border-border pb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <ShoppingBag size={23} />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Discover Your Style
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Explore our collection
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b border-border py-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Sparkles size={23} />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Find Your Favorite
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Choose a style that suits you
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <PackageCheck size={23} />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Continue to Checkout
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Review your selection before ordering
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            A Simple Experience
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                            Your style.
                            <span className="block text-primary">
                                Your choice.
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-muted-foreground sm:text-base">
                            We want finding your preferred Panjabi to feel
                            straightforward. Browse the collection, explore
                            product details, select your preferred options,
                            and review your shopping bag before checkout.
                        </p>

                        <Link
                            href="/products"
                            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-all hover:gap-5"
                        >
                            Browse Our Products
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="px-5 pb-20 sm:px-8 lg:pb-28">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#202A23] px-6 py-16 text-center sm:px-12 sm:py-20">

                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[90px]" />
                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#D6A64B]/10 blur-[90px]" />

                    <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E7B95C]">
                            Panjabi Eshop BD
                        </p>

                        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                            Find the style that
                            <span className="block text-[#E7B95C]">
                                speaks to you.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                            Explore our Panjabi collection and discover
                            styles for your wardrobe.
                        </p>

                        <Link
                            href="/products"
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#202A23] transition-all hover:bg-[#E7B95C]"
                        >
                            Explore Products
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
