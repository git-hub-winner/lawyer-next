import { Phone } from "lucide-react";
import Image from "next/image";

import { CONTACT_PHONE_NUMBER } from "@/lib/config";

import { about } from "./mocks/mocks";
import { AboutCard } from "./ui/AboutCard";

export const AboutSection = () => {
  return (
    <section id="about" className="container mb-15 flex flex-col gap-20 lg:mb-40">
      <div className="relative">
        <div className="relative aspect-video">
          <Image src="/about.webp" alt="man with the case" fill sizes="100vw" />
        </div>
        <div className="bg-primary right-0 bottom-0 text-white lg:absolute lg:max-w-105">
          <div className="relative overflow-hidden p-8 lg:p-15">
            <h4 className="mb-6 max-w-62.5 text-2xl leading-10 xl:text-4xl">
              Personalized Legal Services
            </h4>
            <p className="mb-10 text-lg leading-9 lg:mb-15">
              One size does not fit all when it comes to your legal needs. We craft a team and
              strategy specific to your desired outcome.
            </p>

            <a
              className="flex w-fit items-center gap-2 text-lg"
              href={`tel:${CONTACT_PHONE_NUMBER}`}
            >
              <span>Contact us</span>
              <Phone className="size-4 shrink-0" />
            </a>
            <Image
              src="/dots.webp"
              width={205}
              height={205}
              className="absolute -top-36 right-0 hidden sm:block"
              alt="dots decoration"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {about.map(item => (
          <AboutCard
            key={item.id}
            title={item.title}
            content={item.content}
            highlight={item.highlight}
            stats={item.stats}
          />
        ))}
      </div>
    </section>
  );
};
