import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Our Services | Sri Senthil Spares & Services",
  description: "Explore our range of repair services including motor repair, fan service, mixer grinder repair, and submersible pump repair in Pattukkottai.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ServicesSection />
    </div>
  );
}
