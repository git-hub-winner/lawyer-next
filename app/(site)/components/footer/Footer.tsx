"use client";

import { Scale } from "lucide-react";

import { CONTACT_PHONE_NUMBER } from "@/lib/config";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-20 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Scale className="size-5 shrink-0" />
              McKinley Law
            </div>

            <p className="text-white/80 sm:max-w-sm">
              Providing trusted legal representation with a focus on corporate, intellectual
              property, and commercial law.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:justify-self-end">
            <h4 className="text-lg font-medium">Contact</h4>
            <div className="flex flex-col gap-3 text-white/80">
              <a href={`tel:${CONTACT_PHONE_NUMBER}`} className="hover:text-white">
                +1 (800) 373-3411
              </a>
              <span>New York, United States</span>
              <span>Mon – Fri, 9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6 text-sm text-white/60">
          © {year} McKinley Law. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
