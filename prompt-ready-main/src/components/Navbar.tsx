import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-20">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10 bg-hero-overlay/40 backdrop-blur-sm">
        <div className="container flex items-center justify-between px-5 py-2 text-xs text-primary-foreground/70 sm:px-6">
          <div className="hidden items-center gap-6 sm:flex">
            <span>R. Augusta, 2840 - Sala 74 - Sao Paulo, SP</span>
            <span>(11) 98742-3100</span>
          </div>
          <span className="text-[11px] sm:ml-auto sm:text-xs">contato@drfelipemendes.com.br</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-primary-foreground/10 bg-hero-overlay/30 backdrop-blur-md">
        <div className="container flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
          <div>
            <span className="font-serif text-lg font-semibold text-primary-foreground sm:text-xl">
              Dr. Felipe Mendes
            </span>
            <span className="ml-2 hidden text-xs text-primary-foreground/60 sm:ml-3 sm:inline">
              Psiquiatra | CRM 142.857/SP
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm text-primary-foreground/80 md:flex">
            <a href="#inicio" className="transition-colors hover:text-primary-foreground">Inicio</a>
            <a href="#sobre" className="transition-colors hover:text-primary-foreground">Sobre</a>
            <a href="#especialidades" className="transition-colors hover:text-primary-foreground">Especialidades</a>
            <a href="#blog" className="transition-colors hover:text-primary-foreground">Blog</a>
            <a
              href="#agendar"
              className="border border-primary-foreground/40 px-5 py-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-5 bg-primary-foreground transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-primary-foreground transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-primary-foreground transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-1 border-t border-primary-foreground/10 bg-hero-overlay/50 px-5 py-4 backdrop-blur-md md:hidden">
            <a href="#inicio" onClick={() => setOpen(false)} className="py-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">Inicio</a>
            <a href="#sobre" onClick={() => setOpen(false)} className="py-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">Sobre</a>
            <a href="#especialidades" onClick={() => setOpen(false)} className="py-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">Especialidades</a>
            <a href="#blog" onClick={() => setOpen(false)} className="py-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">Blog</a>
            <a
              href="#agendar"
              onClick={() => setOpen(false)}
              className="mt-2 border border-primary-foreground/40 px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Agendar Consulta
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
