"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="container flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-6 text-center">
        <h1 className="text-primary text-2xl font-bold">Something went wrong</h1>

        <p className="text-muted-foreground">
          An unexpected error occurred while processing your request. Please try again.
        </p>

        <div className="flex flex-col gap-2">
          <Button onClick={reset} className="w-full cursor-pointer">
            Reload page
          </Button>

          <Link href="/">Back to homepage</Link>
        </div>
      </div>
    </div>
  );
}
