export type Review = {
  authorName: string;
  rating: number;
  text: string;
  date: string;
};

// Add real reviews here as customers leave them on your Google Business
// Profile — copy the reviewer's name, star rating, and text across.
// Example:
// { authorName: "Karthik R.", rating: 5, text: "Fixed my submersible pump the same day, genuine parts used.", date: "August 2026" },
export const reviews: Review[] = [];
