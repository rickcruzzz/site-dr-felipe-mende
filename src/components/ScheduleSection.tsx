const ScheduleSection = () => {
  return (
    <section id="agendar" className="section-padding bg-primary">
      <div className="container px-5 text-center sm:px-6">
        <h2 className="mb-6 font-serif text-2xl font-semibold text-primary-foreground sm:text-3xl">
          Agende uma Consulta
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-primary-foreground/70">
          Atendimento presencial em Sao Paulo e teleconsulta para pacientes
          de todo o Brasil. Entre em contato para agendar sua avaliacao.
        </p>
        <a
          href="https://wa.me/5511987423100"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-primary-foreground bg-primary-foreground px-10 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-transparent hover:text-primary-foreground"
        >
          Agendar Consulta
        </a>
      </div>
    </section>
  );
};

export default ScheduleSection;
