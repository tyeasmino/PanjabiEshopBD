
import ProductDetails from "@/components/products/product-details";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((item) => item.id !== product.id)
        .slice(0, 4);

    return (
        <ProductDetails
            product={product}
            relatedProducts={relatedProducts}
        />
    );
}
