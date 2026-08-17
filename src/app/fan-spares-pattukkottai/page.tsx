import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Fan Spares in Pattukkottai | Sri Senthil",
  description: "Find genuine fan spare parts in Pattukkottai. Condensers, blades, motors for ceiling and table fans.",
};

export default function FanSparesPage() {
  return (
    <ServiceSEOLayout
      title="Fan Spares in Pattukkottai"
      subtitle="High-Quality Parts for Ceiling & Table Fans"
      description="Maintain the breeze in your home with our high-quality fan spare parts. Located in Pattukkottai, we provide essential components for ceiling fans, table fans, and exhaust fans."
      imagePath="/images/fan_spare_parts.png"
      features={[
        "Fan condensers / capacitors",
        "Ceiling fan blades",
        "Fan motors and stators",
        "Bearings and bushes",
        "Regulators and switches"
      ]}
      brands={["Crompton", "Orient", "Usha", "Havells", "Bajaj"]}
    />
  );
}
