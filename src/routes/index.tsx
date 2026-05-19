import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <section className="min-h-screen p-6 flex items-center">
      <div className="flex max-w-6xl">
        <h1 className="lg:text-9xl font-serif uppercase text-secondary">
          One Less Thing To Worry
        </h1>
      </div>
    </section>
  );
}
