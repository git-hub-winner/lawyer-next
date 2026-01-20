import { Toaster } from "@/components/ui/sonner";

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

type GuestLayoutProps = {
  children: React.ReactNode;
};

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Toaster
        position="bottom-left"
        closeButton
        toastOptions={{
          className:
            "[&:hover_[data-close-button]]:bg-white! text-primary! [&:hover_[data-close-button]]:border-gray-50! [&_[data-close-button]]:border-gray-50!",
        }}
      />

      <Footer />
    </>
  );
}
