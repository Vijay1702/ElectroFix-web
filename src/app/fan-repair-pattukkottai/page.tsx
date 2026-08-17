import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Fan Repair in Pattukkottai | Sri Senthil",
  description: "Fast and reliable ceiling fan, table fan, and exhaust fan repair in Pattukkottai. Genuine fan spares available.",
};

export default function FanRepairPage() {
  return (
    <ServiceSEOLayout
      title="Fan Repair in Pattukkottai"
      subtitle="Ceiling, Table & Exhaust Fan Servicing"
      description="Don't let a broken fan ruin your comfort. Sri Senthil Spares & Services offers quick and affordable fan repair services in Pattukkottai. We fix all types of fans and stock a wide range of genuine spare parts."
      imagePath="/images/fan.png"
      features={[
        "Ceiling fan rewinding & repair",
        "Table fan servicing",
        "Exhaust fan repair",
        "Condenser replacement",
        "Bearing noise fixing"
      ]}
      commonProblems={[
        "Fan running very slow",
        "Making grinding or clicking noises",
        "Wobbly or unbalanced ceiling fan",
        "Not turning on at all",
        "Switch or regulator not working"
      ]}
      brands={["Crompton", "Orient", "Usha", "Havells", "Bajaj", "V-Guard"]}
    />
  );
}
