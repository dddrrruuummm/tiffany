import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Explore Tiffany KY Home collections across furniture, decor, lighting, and textiles."
};

export default function ShowcasePage() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-page">
        <p className="eyebrow text-wine">Collections</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">Pieces to make a space feel more considered.</h1>
        <p className="mt-5 max-w-2xl leading-7 text-ink/70">
          This showcase presents collection directions rather than a live retail catalog. Product photography, specifications, and final assortments can be added as each approved program develops.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
