import { Anouncement } from "./ui/Anouncement";
import { Contacts } from "./ui/Contacts";
import { Logo } from "./ui/Logo";
import { Navigation } from "./ui/Navigation";

export const Header = () => {
  return (
    <div className="bg-primary-foreground flex flex-col">
      <Anouncement />
      <header className="container flex items-center justify-between gap-10 py-6">
        <div className="flex items-center gap-10">
          <Logo />
          <Navigation />
        </div>
        <Contacts />
      </header>
    </div>
  );
};
