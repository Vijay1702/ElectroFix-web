import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Mixer Grinder Service in Pattukkottai | Sri Senthil",
  description: "Expert mixer grinder repair in Pattukkottai. We replace blades, repair motors, and sell genuine mixie spare parts.",
};

export default function MixerGrinderServicePage() {
  return (
    <ServiceSEOLayout
      title="Mixer Grinder Service in Pattukkottai"
      subtitle="Reliable Mixie Repair & Spare Parts"
      description="Your mixer grinder is an essential kitchen appliance. We provide fast and expert mixer grinder servicing in Pattukkottai, ensuring your appliance works like new. From motor issues to broken jars, we fix it all."
      imagePath="/images/mixer.png"
      features={[
        "Mixer motor repair and rewinding",
        "Jar blade and coupler replacement",
        "Overload protector (OLP) fixing",
        "Rotary switch replacement",
        "General servicing and cleaning"
      ]}
      commonProblems={[
        "Mixer stops suddenly during use",
        "Jar is leaking from the bottom",
        "Blades are blunt or not spinning",
        "Burning smell from the motor",
        "Unusual loud noise"
      ]}
      brands={["Preethi", "Butterfly", "Sujata", "Philips", "Bajaj", "Maharaja Whiteline"]}
    />
  );
}
