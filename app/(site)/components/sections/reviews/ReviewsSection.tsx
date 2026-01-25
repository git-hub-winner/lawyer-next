"use client";

import dynamic from "next/dynamic";

import { reviews } from "./mocks/mocks";

const ReviewsSlider = dynamic(() => import("./ui/ReviewsSlider"), {
  ssr: false,
});

export default function ReviewsSection() {
  return (
    <section id="reviews" className="container mb-15 flex flex-col gap-20 lg:mb-40">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <h2 className="text-primary text-4xl font-semibold">What Our Clients Say</h2>

        <p className="text-lg leading-relaxed">
          We take pride in building long-term relationships based on trust, transparency, and proven
          legal expertise. Here is what our clients say about working with McKinley.
        </p>
      </div>

      <ReviewsSlider items={reviews} />
    </section>
  );
}
