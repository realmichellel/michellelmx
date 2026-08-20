import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michelle — Links & Bookings" },
      {
        name: "description",
        content:
          "Michelle's personal page: follow along on Instagram and TikTok, or book a 30 or 60 minute meeting.",
      },
      { property: "og:title", content: "Michelle — Links & Bookings" },
      {
        property: "og:description",
        content:
          "Follow Michelle on Instagram and TikTok, or book a 30 or 60 minute meeting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3c.4 2.6 2 4.2 4.6 4.4" />
    </svg>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-background px-6 pt-24 font-sans text-foreground sm:pt-32">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        <h1 className="mb-8 font-serif text-6xl font-light italic tracking-tighter md:text-8xl">
          Michelle
        </h1>

        <div className="mb-20 flex items-center gap-10">
          <a
            href="https://www.instagram.com/michellee_lmx/"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col items-center gap-2 transition-colors duration-300 hover:text-accent"
          >
            <Instagram className="size-7" strokeWidth={1.4} />
            <span className="text-[9px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
              Instagram
            </span>
          </a>
          <a
            href="https://www.tiktok.com/@galaxylmx"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col items-center gap-2 transition-colors duration-300 hover:text-accent"
          >
            <TikTokIcon className="size-7" />
            <span className="text-[9px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
              TikTok
            </span>
          </a>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-4">
          <h2 className="mb-4 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
            Book a meeting with me to discuss anything: trading, careers, etc.
          </h2>

          <a
            href="https://cal.com/michellelmx/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex w-full items-center justify-between rounded-full border border-border px-8 py-5 transition-all duration-500 hover:border-accent hover:text-accent"
          >
            <span className="text-sm tracking-widest">30 MINUTE SESSION</span>
            <ArrowUpRight
              className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.4}
            />
          </a>

          <a
            href="https://cal.com/michellelmx/60min"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex w-full items-center justify-between rounded-full border border-border px-8 py-5 transition-all duration-500 hover:border-accent hover:text-accent"
          >
            <span className="text-sm tracking-widest">60 MINUTE SESSION</span>
            <ArrowUpRight
              className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.4}
            />
          </a>
        </div>

        <footer className="mb-12 mt-32">
          <div className="mx-auto mb-6 h-px w-12 bg-border" />
          <p className="text-[10px] uppercase italic tracking-[0.4em] text-muted-foreground">
            Curated Presence © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
