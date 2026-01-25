import { NavitagtionLinks } from "../mocks/mocks";
import { NavigationLink } from "./NavigationLink";

export const Navigation = () => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NavitagtionLinks.map(link => (
        <NavigationLink
          key={link}
          to={`${link}`}
          text={link.charAt(0).toUpperCase() + link.slice(1)}
        />
      ))}
    </nav>
  );
};
