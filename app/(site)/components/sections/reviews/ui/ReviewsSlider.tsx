"use client";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SingleReview {
  review: string;
  author: string;
}

interface ReviewsSliderProps {
  items: SingleReview[];
}

export default function ReviewsSlider({ items }: ReviewsSliderProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".reviews-prev",
          nextEl: ".reviews-next",
        }}
        loop
        className="reviewsSlider"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-4 px-10 text-center">
              <p className="text-primary text-lg">{item.review}</p>
              <span className="text-primary text-sm">{item.author}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between">
        <button className="reviews-prev text-primary cursor-pointer" aria-label="Previous review">
          <ChevronLeft className="size-10 shrink-0" />
        </button>
        <button className="reviews-next text-primary cursor-pointer" aria-label="Next review">
          <ChevronRight className="size-10 shrink-0" />
        </button>
      </div>
    </div>
  );
}
