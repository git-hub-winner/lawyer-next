/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <img src="/logo.svg" alt="logo McKinley" width={130} height={30} />
    </Link>
  );
};
