"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactButtonProps = {
  className?: string;
};

export const ContactButton = ({ className }: ContactButtonProps) => {
  return (
    <Button
      className={cn(
        "flex cursor-pointer rounded-sm p-4 text-lg font-normal text-white lg:p-7",
        className
      )}
      onClick={() =>
        toast.info("Online requests are currently unavailable. Please contact us by phone.")
      }
    >
      Request Consultation
    </Button>
  );
};
