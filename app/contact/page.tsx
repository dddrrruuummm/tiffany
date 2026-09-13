import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tiffany KY Home to discuss home goods collections, sourcing needs, and partnership opportunities."
};

export default function ContactPage() {
  return <ContactSection />;
}
