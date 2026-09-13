import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Tiffany KY Home, a modern home collections brand operated by JENNIFERFY INC."
};

export default function AboutPage() {
  return (
    <section className="bg-pearl py-16 text-ink">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-wine">About Tiffany KY Home</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight">Home goods with room for color, texture, and real life.</h1>
          <p className="mt-6 leading-8 text-ink/70">
            Tiffany KY Home is a public-facing home collections brand operated by JENNIFERFY INC, a Colorado corporation. The company's formation documents establish the legal entity; this website presents the home-focused direction reflected in the Tiffany KY Home brand.
          </p>
          <p className="mt-4 leading-8 text-ink/70">
            We present a thoughtful starting point for retail buyers, designers, hospitality teams, suppliers, and distribution partners to begin a collection or sourcing conversation.
          </p>
          <Button href="/contact" className="mt-7">Contact the Company</Button>
        </div>
        <div className="grid gap-4 rounded-md border border-ink/10 bg-white p-7 shadow-soft"><p className="eyebrow text-wine">Collection Focus</p><p className="text-3xl font-bold leading-tight">Furniture. Decor. Textiles. Lighting. Everyday objects with a point of view.</p><div className="grid gap-4 border-t border-ink/10 pt-6 text-sm leading-6 text-ink/65"><p>Built for retail, hospitality, design, and distribution conversations.</p><p>Programs can be tailored around collection scope, materials, target market, sourcing requirements, and project context.</p></div></div>
      </div>
    </section>
  );
}
