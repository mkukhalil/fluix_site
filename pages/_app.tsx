// pages/_app.tsx
import type { AppProps } from "next/app";
import { MainLayout } from "../client/src/components/MainLayout";
import "../client/src/index.css";

// Google Fonts
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

// Dynamically load client providers (SSR disabled)
import dynamic from "next/dynamic";
const ClientProviders = dynamic(
  () => import("../client/src/components/ClientProviders").then(mod => mod.ClientProviders),
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientProviders>
      <MainLayout className={`${outfit.variable} ${plusJakarta.variable}`}>
        <Component {...pageProps} />
      </MainLayout>
    </ClientProviders>
  );
}
