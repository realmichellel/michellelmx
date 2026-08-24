import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ArrowUpRight, Mail } from "lucide-react";

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
        <h1 className="animate-fade-up mb-6 font-serif text-6xl font-light italic tracking-tighter md:text-8xl">
          Michelle
        </h1>

        <div className="animate-fade-up mb-16 flex items-center gap-3 [animation-delay:120ms]">
          <div className="h-px w-10 bg-border" />
          <a
            href="https://www.instagram.com/michellee_lmx/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            <Instagram className="size-6" strokeWidth={1.3} />
          </a>
          <a
            href="https://www.tiktok.com/@galaxylmx"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            <TikTokIcon className="size-6" />
          </a>
          <a
            href="mailto:michellelumx@gmail.com"
            aria-label="Email"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            <Mail className="size-6" strokeWidth={1.3} />
          </a>
          <div className="h-px w-10 bg-border" />
        </div>

        <div className="animate-fade-up flex w-full max-w-sm flex-col gap-3 [animation-delay:240ms]">
          <h2 className="mb-6 font-serif text-xl font-light italic leading-snug text-foreground/80">
            Book a meeting with me to discuss anything: trading, tech, careers, etc.
          </h2>

          <a
            href="https://cal.com/michellelmx/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex w-full items-center justify-between bg-primary px-7 py-4 text-primary-foreground transition-opacity duration-300 hover:opacity-85"
          >
            <span className="flex items-baseline gap-3">
              <span className="text-[11px] uppercase tracking-[0.25em]">30 minute session</span>
              <span className="font-serif text-sm italic opacity-80">$85</span>
            </span>
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.4}
            />
          </a>

          <a
            href="https://cal.com/michellelmx/60min"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex w-full items-center justify-between border border-foreground/20 px-7 py-4 transition-colors duration-300 hover:border-foreground"
          >
            <span className="flex items-baseline gap-3">
              <span className="text-[11px] uppercase tracking-[0.25em]">60 minute session</span>
              <span className="font-serif text-sm italic opacity-80">$150</span>
            </span>

            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.4}
            />
          </a>

          <p className="mt-6 font-serif text-sm italic text-foreground/60">
            For startups, please DM or email!
          </p>
        </div>

        <footer className="animate-fade-up mb-12 mt-28 [animation-delay:360ms]">
          <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
            Michelle © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
