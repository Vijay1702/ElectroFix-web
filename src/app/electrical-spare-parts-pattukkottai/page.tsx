import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Electrical Spare Parts in Pattukkottai | Sri Senthil",
  description: "Genuine electrical spare parts shop in Pattukkottai. We sell parts for mixers, grinders, fans, motors, and more.",
};

export default function ElectricalSparePartsPage() {
  return (
    <ServiceSEOLayout
      title="Electrical Spare Parts in Pattukkottai"
      subtitle="Your Trusted Source for Genuine Spares"
      description="Sri Senthil Spares & Services is your one-stop shop for genuine electrical spare parts in Pattukkottai. Whether you are a DIY enthusiast or a professional mechanic, we have the right parts for your repair needs."
      imagePath="/images/motor_spare_parts.png"
      features={[
        "Mixer and grinder spare parts",
        "Fan and cooler spares",
        "Water motor and pump parts",
        "Gas stove and cooker spares",
        "Wholesale and retail available"
      ]}
      brands={["Preethi", "Butterfly", "Crompton", "Orient", "Usha", "Havells"]}
    />
  );
}
