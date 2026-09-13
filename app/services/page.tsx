import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Tiffany KY Home partnership options for home goods collections and sourcing programs."
};

export default function ServicesPage() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-page">
        <p className="eyebrow text-wine">For Partners</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">Ways to build a better home goods program together.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-ink/10 bg-pearl p-6">
              <Check className="text-wine" />
              <h2 className="mt-4 text-xl font-bold">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                A collection-focused framework for moving from initial interest to a clear, qualified conversation about product direction, requirements, and fit.
              </p>
            </div>
          ))}
        </div>
        <Button href="/contact" className="mt-9">Start a Partner Inquiry</Button>
      </div>
    </section>
  );
}
