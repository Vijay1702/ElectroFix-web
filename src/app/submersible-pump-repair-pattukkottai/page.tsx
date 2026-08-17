import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Submersible Pump Repair in Pattukkottai | Sri Senthil",
  description: "Specialized submersible pump repair and winding services in Pattukkottai. Get your borewell motor working again quickly.",
};

export default function SubmersiblePumpRepairPage() {
  return (
    <ServiceSEOLayout
      title="Submersible Pump Repair in Pattukkottai"
      subtitle="Expert Borewell Motor Winding & Servicing"
      description="Submersible pumps require specialized knowledge to repair. At Sri Senthil Spares & Services, we have the expertise to pull, diagnose, and rewind your submersible water pumps effectively in Pattukkottai."
      imagePath="/images/submersible.png"
      features={[
        "Submersible motor rewinding",
        "Pump overhaul and servicing",
        "Cable jointing and repair",
        "Thrust bearing replacement",
        "Control panel board repair"
      ]}
      commonProblems={[
        "Pump runs but no water is delivered",
        "Motor draws high current/trips",
        "Sand or mud coming with water",
        "Vibration or unusual noise",
        "Frequent starter tripping"
      ]}
      brands={["Texmo", "CRI", "Suguna", "Kirloskar", "KSB", "Crompton"]}
    />
  );
}
