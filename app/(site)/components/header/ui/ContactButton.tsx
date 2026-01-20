"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export const ContactButton = () => {
  return (
    <Button
      className="hidden cursor-pointer rounded-sm p-4 text-lg font-normal text-white md:flex lg:p-7"
      onClick={() =>
        toast.info("Online requests are currently unavailable. Please contact us by phone.")
      }
    >
      Request Consultation
    </Button>
  );
};
