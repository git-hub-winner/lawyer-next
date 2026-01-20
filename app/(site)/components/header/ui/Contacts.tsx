import { CONTACT_PHONE_NUMBER } from "@/lib/config";

import { Burger } from "./Burger";
import { ContactButton } from "./ContactButton";

export const Contacts = () => {
  return (
    <div className="flex items-center gap-8">
      <a href={`tel:${CONTACT_PHONE_NUMBER}`} className="text-primary hidden text-lg sm:flex">
        +1 (800) 373-3411
      </a>
      <ContactButton />
      <Burger />
    </div>
  );
};
