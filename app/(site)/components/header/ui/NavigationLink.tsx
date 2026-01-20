"use client";

import { Link } from "react-scroll";

interface LinkProps {
  to: string;
  text: string;
}

export const NavigationLink = ({ to, text }: LinkProps) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      activeClass="font-bold"
      className="text-primary cursor-pointer"
    >
      {text}
    </Link>
  );
};
