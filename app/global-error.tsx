"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center px-4 text-center">
          <div>
            <h1 className="mb-2 text-2xl font-bold">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              A critical error occurred. Please try again.
            </p>
            <button onClick={reset} className="bg-primary rounded-md px-4 py-2 text-white">
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
