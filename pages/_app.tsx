// pages/_app.tsx
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../client/src/lib/queryClient";
import { TooltipProvider } from "../client/src/components/ui/tooltip";
import { Toaster } from "../client/src/components/ui/toaster";
import { MainLayout } from "../client/src/components/MainLayout";
import "../client/src/index.css";

// Import Google Fonts via next/font
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-body",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <MainLayout className={`${outfit.variable} ${plusJakarta.variable}`}>
          <Component {...pageProps} />
        </MainLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
