/* eslint-disable @next/next/no-img-element */
import { CONTACT_PHONE_NUMBER } from "@/lib/config";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
}

export const ArticleCard = ({ image, title, description }: ArticleCardProps) => {
  return (
    <div className="flex flex-col justify-between border border-[#E4ECF0] px-8 py-10 shadow-2xl">
      <div className="mb-8 flex flex-col">
        <img src={image} alt={""} className="mb-10 size-16 shrink-0" />
        <h3 className="text-primary mb-3 text-xl">{title}</h3>
        <p className="text-primary max-w-82.5 text-lg">{description}</p>
      </div>
      <a className="flex w-fit items-center gap-2" href={`tel:${CONTACT_PHONE_NUMBER}`}>
        <span>Contact us</span>
        <img src="/arrow-right.svg" className="size-4 shrink-0" alt="arrow-right" />
      </a>
    </div>
  );
};
