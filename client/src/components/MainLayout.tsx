import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

interface MainLayoutProps {
  children: ReactNode;
  className?: string; // optional
}

export function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div className={className}> {/* Apply className here */}
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
