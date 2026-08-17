import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Mixie Spares in Pattukkottai | Sri Senthil",
  description: "Buy genuine mixie spare parts in Pattukkottai. Jars, blades, couplers, motors, and more available.",
};

export default function MixieSparesPage() {
  return (
    <ServiceSEOLayout
      title="Mixie Spares in Pattukkottai"
      subtitle="Complete Range of Mixer Grinder Parts"
      description="Need a replacement part for your mixie? We stock a comprehensive range of genuine mixie spare parts in Pattukkottai for all leading brands, ensuring your appliance runs safely and efficiently."
      imagePath="/images/mixer_spare_parts.png"
      features={[
        "Mixie jars and lids",
        "Stainless steel blades",
        "Couplers and bushes",
        "Overload protectors (OLP)",
        "Mixie motors and armatures",
        "Rotary switches and knobs"
      ]}
      brands={["Preethi", "Butterfly", "Sujata", "Philips", "Panasonic", "Maharaja"]}
    />
  );
}
