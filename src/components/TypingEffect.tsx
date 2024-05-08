"use client";
import { Dot } from "lucide-react";
import { TypewriterEffectSmooth } from "./TypeWritter";
import Link from "next/link";

export function TypewriterEffect() {
  const words = [
    {
      text: "Courses",
      className: "text-zinc-200",
    },
    {
      text: "at",
      className: "text-zinc-200",
    },
    {
      text: "the",
      className: "text-zinc-200",
    },
    {
      text: "tip",
      className: "text-zinc-200",
    },
    {
      text: "of Prompt.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-200 text-xs sm:text-base border-[1px] border-zinc-500 rounded-xl px-2 py-1 flex items-center justify-center shadow-lg">
        <span>
          <Dot className="text-blue-500 mx-[-5px] animate-ping" size={25} />
        </span>
        Druster is Live
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="/home">
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-[-10px] text-sm font-medium text-white backdrop-blur-3xl">
              Join Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
