
import ProductCard from "@/components/products/product-card";

import { products } from "@/data/products";

export default function FeaturedProducts() {
    return (
        <section className="bg-background px-5 py-16 sm:px-8 md:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Carefully Selected For You
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Featured Collection
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Explore our handpicked Panjabi collection, where timeless style
                            meets everyday comfort.
                        </p>
                    </div>

                    <a
                        href="/products"
                        className="w-fit text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                        View All Products →
                    </a>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-14">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
