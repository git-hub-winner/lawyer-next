"use client";

import { Link } from "react-scroll";

interface LinkProps {
  to: string;
  text: string;
  onClick?: () => void;
}

export const NavigationLink = ({ to, text, onClick }: LinkProps) => {
  return (
    <Link
      to={to}
      spy
      smooth
      offset={-40}
      duration={500}
      onClick={onClick}
      activeClass="font-bold"
      className="text-primary cursor-pointer"
    >
      {text}
    </Link>
  );
};
