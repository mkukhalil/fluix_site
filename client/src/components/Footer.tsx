import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.webp"
              alt="Fluix Logo"
              width={40}
              height={40}
              sizes="40px"
              className="object-contain"
            />
            <span className="text-3xl font-bold font-heading tracking-tighter glow-text">
              Fluix
            </span>
          </div>

          <div className="text-blue-200/60 font-light tracking-wide">
            © {new Date().getFullYear()} Fluix. All rights reserved.
          </div>

          <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-blue-200">
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-accent transition-colors">Terms</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
