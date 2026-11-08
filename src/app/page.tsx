
"use client";

import FeaturedProducts from "@/components/home/featured-products";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">

      {/* Main Content */}
      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">

        <HeroSection />

        <FeaturedProducts />

        {/* Theme Preview */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 h-2 w-12 rounded-full bg-primary" />
            <h3 className="font-semibold text-card-foreground">
              Premium Quality
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Carefully selected styles for your wardrobe.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 h-2 w-12 rounded-full bg-primary" />
            <h3 className="font-semibold text-card-foreground">
              Modern Collection
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Discover designs that match your personality.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 h-2 w-12 rounded-full bg-primary" />
            <h3 className="font-semibold text-card-foreground">
              Easy Shopping
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A simple and comfortable shopping experience.
            </p>
          </div>
        </div>

        {/* Theme Information */}
        <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-5">
          <h3 className="font-semibold">Theme Preview</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Use the controls in the header to switch between Light, Dark,
            and System themes. All colors update automatically through
            our centralized CSS variables.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} NextBuy. All rights reserved.
          </p>
          <p>Designed for your style.</p>
        </div>
      </footer>
    </main>
  );
}
