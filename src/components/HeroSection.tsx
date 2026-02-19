import heroImage from "@/assets/hero-clinic.jpg";
import doctorImage from "@/assets/doctor-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay/80" />

      <div className="container relative z-10 flex min-h-[100svh] items-center px-5 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left content */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50 sm:text-sm sm:tracking-widest">
              Psiquiatra em Sao Paulo/SP
            </p>
            <h1 className="mb-5 font-serif text-2xl font-bold leading-tight text-primary-foreground sm:mb-6 sm:text-4xl lg:text-5xl">
              Sua mente mais calma e sua vida de volta atraves da psiquiatria
            </h1>
            <p className="mb-6 max-w-lg text-sm leading-relaxed text-primary-foreground/70 sm:mb-8 sm:text-base">
              Psiquiatria e uma especialidade da Medicina que lida com a
              prevencao, diagnostico, tratamento e reabilitacao das diferentes
              formas de sofrimentos mentais. O objetivo principal e o alivio do
              sofrimento e o bem-estar psiquico do paciente.
            </p>
            <a
              href="#agendar"
              className="inline-block bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:px-8 sm:py-3.5"
            >
              Agende sua consulta agora
            </a>
          </div>

          {/* Right - Doctor photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={doctorImage}
                alt="Dr. Felipe Mendes - Psiquiatra"
                className="h-[320px] w-auto object-cover shadow-2xl sm:h-[400px] lg:h-[500px]"
              />
              <div className="absolute -bottom-3 -left-3 bg-primary px-4 py-2 sm:-bottom-4 sm:-left-4 sm:px-6 sm:py-3">
                <span className="text-xs font-semibold text-primary-foreground sm:text-sm">
                  + de 5.000 atendimentos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
