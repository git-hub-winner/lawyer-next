import { ContactButton } from "../ui/ContactButton";

export default function ContactsSection() {
  return (
    <section id="contacts" className="bg-[#E4ECF0] py-20 lg:py-40">
      <div className="text-primary flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h4 className="text-primary text-4xl font-medium xl:text-[44px]">
          Need professional legal advice?
        </h4>
        <p className="text-primary max-w-152 text-lg xl:text-2xl xl:leading-11">
          Get a free consultation with our legal experts
        </p>
        <ContactButton />
      </div>
    </section>
  );
}
