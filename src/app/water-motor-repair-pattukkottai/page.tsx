import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Water Motor Repair in Pattukkottai | Sri Senthil",
  description: "Professional water motor repair services in Pattukkottai. We service domestic and agricultural water motors.",
};

export default function WaterMotorRepairPage() {
  return (
    <ServiceSEOLayout
      title="Water Motor Repair in Pattukkottai"
      subtitle="Fast & Reliable Domestic Water Motor Services"
      description="Whether it's for your home overhead tank or agricultural needs, we provide top-notch water motor repair in Pattukkottai. We understand the urgency of water problems and offer fast, reliable solutions."
      imagePath="/images/motor.png"
      features={[
        "Domestic water pump repair",
        "Agricultural motor servicing",
        "Motor coil rewinding",
        "Capacitor and switch replacement",
        "Complete overhaul and cleaning"
      ]}
      commonProblems={[
        "Motor humming but not spinning",
        "Water leaking from pump body",
        "Motor gets too hot",
        "Taking too long to fill the tank",
        "Bearings making a loud squealing sound"
      ]}
      brands={["Suguna", "Texmo", "Crompton", "Kirloskar", "V-Guard"]}
    />
  );
}
