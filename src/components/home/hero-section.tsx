
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background">
            <div className="mx-auto grid min-h-150 max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:py-10 lg:grid-cols-2 lg:gap-14 lg:py-12">

                {/* Left Content */}
                <div className="relative z-10 max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        New Collection
                    </span>

                    <h1 className="mt-7 text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Style That
                        <br />
                        Speaks <span className="text-primary">Elegance.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                        Discover timeless Panjabi styles crafted for comfort, confidence,
                        and every special occasion. Find the look that feels uniquely yours.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href="/products"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                        >
                            Explore Collection
                            <span aria-hidden="true">→</span>
                        </Link>

                        <Link
                            href="/about"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                            Discover More
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7">
                        <div>
                            <p className="text-xl font-bold text-foreground">Premium</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Quality & Comfort
                            </p>
                        </div>

                        <div className="h-9 w-px bg-border" />

                        <div>
                            <p className="text-xl font-bold text-foreground">Timeless</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Everyday Elegance
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mx-auto w-full max-w-140">
                    <div className="absolute -inset-4 rounded-4xl bg-primary/10 blur-xl" />

                    <div className="relative aspect-4/4.5 overflow-hidden rounded-2xl bg-card shadow-2xl sm:aspect-5/4 lg:aspect-4/4.5">
                        <Image
                            src="/images/hero-panjabi.png"
                            alt="NextBuy premium Panjabi collection"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/45 to-transparent p-5 sm:p-7">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                                NextBuy Collection
                            </p>
                            <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                                Designed to Impress.
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-5 -right-3 rounded-xl border border-border bg-card px-4 py-3 shadow-xl sm:-right-6 sm:px-5">
                        <p className="text-xs font-medium text-muted-foreground">
                            Your Style, Your Choice
                        </p>
                        <p className="mt-1 text-sm font-bold text-foreground">
                            Make Every Moment Special
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
