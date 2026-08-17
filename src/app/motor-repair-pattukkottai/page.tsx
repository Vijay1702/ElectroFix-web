import ServiceSEOLayout from "@/components/layouts/ServiceSEOLayout";

export const metadata = {
  title: "Motor Repair in Pattukkottai | Sri Senthil",
  description: "Expert water motor repair and rewinding services in Pattukkottai. We offer genuine spare parts and fast servicing for all major motor brands.",
};

export default function MotorRepairPage() {
  return (
    <ServiceSEOLayout
      title="Motor Repair in Pattukkottai"
      subtitle="Expert Water Motor Rewinding & Servicing"
      description="At Sri Senthil Spares & Services, we specialize in comprehensive water motor repair and rewinding. Our expert technicians can diagnose and fix your motor problems quickly, ensuring a reliable water supply for your home or business in Pattukkottai."
      imagePath="/images/motor.png"
      features={[
        "Complete water motor repair",
        "Expert motor rewinding",
        "Bearing and oil seal replacement",
        "Genuine spare parts used",
        "Fast turnaround time"
      ]}
      commonProblems={[
        "Motor not starting or making humming noise",
        "Overheating or burnt smell",
        "Low water pressure or flow",
        "Leaking seals",
        "Tripping electrical breakers"
      ]}
      brands={["Crompton", "Texmo", "Suguna", "Kirloskar", "V-Guard", "Havells"]}
    />
  );
}
