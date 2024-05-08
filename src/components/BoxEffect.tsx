"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from "./BackgroundBoxes";
import { TypewriterEffect } from "./TypingEffect";

export function BackgroundBoxes() {
  return (
    <div className="h-[80vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <TypewriterEffect />
      </h1>
    </div>
  );
}
