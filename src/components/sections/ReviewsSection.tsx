import { FaStar, FaRegStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import type { Review } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5 text-accent">
      {[1, 2, 3, 4, 5].map((n) =>
        n <= rounded ? <FaStar key={n} size={15} /> : <FaRegStar key={n} size={15} />
      )}
    </div>
  );
}

const REVIEW_LINK = "https://g.page/r/CYMmoN5NocuSEBM/review";

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const hasReviews = reviews.length > 0;
  const average = hasReviews
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Customer Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Customers Says About Us</h3>
          {hasReviews && (
            <div className="flex items-center justify-center gap-3">
              <Stars rating={average} />
              <span className="font-bold text-secondary text-lg">{average.toFixed(1)}</span>
              <span className="text-gray-500">
                ({reviews.length} review{reviews.length === 1 ? "" : "s"})
              </span>
            </div>
          )}
        </div>

        {hasReviews ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col"
                >
                  <Stars rating={review.rating} />
                  <p className="text-gray-600 leading-relaxed my-4 flex-grow">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                      {review.authorName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-secondary text-sm">{review.authorName}</p>
                      <p className="text-gray-400 text-xs">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={REVIEW_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <FiMessageSquare /> Leave Us a Review Too
              </a>
            </div>
          </>
        ) : (
          <div className="max-w-md mx-auto text-center bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FaStar size={26} />
            </div>
            <h4 className="text-xl font-bold text-secondary mb-2">Be Our First Google Review</h4>
            <p className="text-gray-600 mb-6">
              We haven&apos;t collected any reviews yet. Tap the button below to be the first to share your
              experience on Google.
            </p>
            <a
              href={REVIEW_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <FiMessageSquare /> Review Us on Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
