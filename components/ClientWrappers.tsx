"use client";

import dynamic from "next/dynamic";

export const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
export const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
export const Noise = dynamic(() => import("@/components/Noise"), { ssr: false });
