import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About Us | Sri Senthil Spares & Services",
  description: "Learn more about our legacy of providing expert electrical appliance repair and genuine spare parts in Pattukkottai.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <AboutSection />
    </div>
  );
}
