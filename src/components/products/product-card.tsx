
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    badge?: string;
};

export default function ProductCard({
    id,
    name,
    image,
    price,
    originalPrice,
    badge,
}: ProductCardProps) {
    const discount =
        originalPrice > price
            ? Math.round(((originalPrice - price) / originalPrice) * 100)
            : 0;

    return (
        <article className="group min-w-0">
            <Link href={`/products/${id}`} className="block">
                {/* Image Stage */}
                <div className="relative isolate aspect-[3/4] overflow-hidden rounded-2xl bg-[#1d1d1d]">

                    {/* Background Decoration */}
                    <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/[0.07] transition-transform duration-700 group-hover:scale-125" />

                    <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-white/6" />


                    {/* Product Badge */}
                    {badge && (
                        <span className="absolute right-4 top-4 z-10 rounded-full border border-black/20 bg-white/01 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-black shadow-lg backdrop-blur-sm sm:text-[10px]">
                            {badge}
                        </span>
                    )}


                    {/* Premium Discount Label */}
                    {discount > 0 && (
                        <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start rounded-lg bg-[#211c19b6] px-3.5 py-1.5 shadow-lg sm:px-4 sm:py-1">
                            <span className="text-sm font-extrabold tracking-wide text-[#FF914D]">
                                {discount}% OFF
                            </span>

                            <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#C4A18C] sm:text-[9px]">
                                Special Price
                            </span>
                        </div>
                    )}



                    {/* Product Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
                        />
                    </div>

                    {/* Bottom Hover Action */}
                    <div className="absolute bottom-4 right-4 z-10 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </div>
                </div>

                {/* Product Details */}
                <div className="px-1 pt-4 sm:pt-5">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                                NextBuy / Collection
                            </p>

                            <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-foreground transition-colors duration-300 group-hover:text-primary sm:text-base">
                                {name}
                            </h3>
                        </div>

                        <span className="mt-1 shrink-0 text-lg text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary">
                            ↗
                        </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                            ৳{price.toLocaleString("en-BD")}
                        </span>

                        {discount > 0 && (
                            <span className="text-xs text-muted-foreground line-through">
                                ৳{originalPrice.toLocaleString("en-BD")}
                            </span>
                        )}
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-4 h-px w-full overflow-hidden bg-border">
                        <div className="h-full w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                    </div>

                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
                        View Product
                    </p>
                </div>
            </Link>
        </article>
    );
}
