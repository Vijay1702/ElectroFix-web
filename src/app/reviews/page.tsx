import ReviewsSection from "@/components/sections/ReviewsSection";
import { reviews } from "@/data/reviews";

export const metadata = {
  title: "Customer Reviews | Sri Senthil Spares & Services",
  description:
    "Read genuine reviews from customers of Sri Senthil Spares & Services in Pattukkottai, or leave us your own.",
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ReviewsSection reviews={reviews} />
    </div>
  );
}
