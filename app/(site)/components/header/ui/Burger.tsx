"use client";

import { Scale } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CONTACT_PHONE_NUMBER } from "@/lib/config";

import { NavitagtionLinks } from "../mocks/mocks";
import { NavigationLink } from "./NavigationLink";

export function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="flex lg:hidden" variant="outline">
          <Scale className="size-4 shrink-0" />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigate through the site</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            {NavitagtionLinks.map(el => (
              <NavigationLink
                key={el}
                to={el}
                text={el.charAt(0).toUpperCase() + el.slice(1)}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>

        <SheetFooter className="border-t px-4 py-4">
          <a href={`tel:${CONTACT_PHONE_NUMBER}`} className="text-primary text-lg">
            +1 (800) 373-3411
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
