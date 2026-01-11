"use client";

import Link from "next/link";

export default function NotFound() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <div className="flex max-w-2xl flex-col gap-6 text-center">
        <h1 className="text-primary text-9xl font-bold opacity-20">404</h1>

        <h2 className="text-primary text-3xl font-bold md:text-4xl">Page Not Found</h2>
        <p className="text-primary text-lg">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <p className="text-gray-600">
          You may have entered the address incorrectly, or the page may have been removed.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-3 font-medium transition-colors duration-200"
          >
            Back to homepage
          </Link>
        </div>

        <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          © {currentYear} McKinley Law Firm. All rights reserved.
        </p>
      </div>
    </div>
  );
}
