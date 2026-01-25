import Image from "next/image";

import { ContactButton } from "../ui/ContactButton";

export const HeroSection = () => {
  return (
    <section className="bg-secondary relative mb-15 grid grid-cols-1 items-center gap-0 overflow-hidden lg:mb-40 lg:grid-cols-6 lg:gap-10">
      <div className="relative col-span-3 flex w-full flex-col gap-8 px-4 py-15 lg:py-0 xl:col-span-4 xl:px-21">
        <Image
          src="/dots.webp"
          className="left-0.5-4 absolute -top-45 lg:-top-73 xl:left-20"
          alt="dots decoration"
          width={205}
          height={205}
        />
        <h1 className="text-primary text-4xl leading-12 lg:max-w-100 lg:text-[55px] lg:leading-16">
          Corporate Legal Representation
        </h1>
        <p className="text-primary text-lg lg:max-w-140 lg:text-2xl lg:leading-10">
          We understand the difficulties and stress that your legal issues bring. Our team is
          committed to providing you with the individual attention, communication, and dedication
          you deserve.
        </p>
        <ContactButton className="w-fit" />

        <Image
          src="/dots.webp"
          className="absolute right-4 -bottom-45 lg:-bottom-73 xl:right-20"
          alt="dots decoration"
          width={205}
          height={205}
        />
      </div>
      <div className="relative col-span-3 min-h-120 lg:min-h-187.5 xl:col-span-2">
        <Image
          src="/hero.webp"
          alt="business building"
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1440px) 1440px, 100vw"
        />
      </div>
    </section>
  );
};
