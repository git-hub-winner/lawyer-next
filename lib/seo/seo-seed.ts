import type { Metadata } from "next";
import { DOMAIN_URL } from "../config";

export const baseMetadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),
  applicationName: "Neon Tattoo",
  robots: {
    index: true,
    follow: true,
  },
};
