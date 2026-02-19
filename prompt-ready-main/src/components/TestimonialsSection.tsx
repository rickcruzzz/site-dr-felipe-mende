const testimonials = [
  {
    text: "O Dr. Felipe mudou minha vida. Depois de anos convivendo com ansiedade sem saber o que era, finalmente recebi um diagnostico e um tratamento que funcionou. Hoje consigo trabalhar e viver com tranquilidade.",
    name: "M.S.",
    info: "Paciente desde 2023",
  },
  {
    text: "Procurei o Dr. Felipe durante uma crise de depressao pos-parto e fui acolhida com muito profissionalismo e humanidade. O tratamento foi gradual, seguro e eficaz. Recomendo a todas as maes.",
    name: "A.R.",
    info: "Paciente desde 2024",
  },
  {
    text: "Excelente profissional. Muito atencioso, explica tudo com clareza e acompanha de perto a evolucao do tratamento. Me sinto seguro e bem cuidado em cada consulta.",
    name: "T.L.",
    info: "Paciente desde 2022",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container px-5 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="heading-accent heading-accent-center mb-6 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            O que Dizem os Pacientes
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="border border-border bg-background p-8"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-primary text-sm">&#9733;</span>
                ))}
              </div>
              <p className="mb-6 text-sm italic leading-relaxed text-foreground/80">
                "{item.text}"
              </p>
              <div>
                <span className="block text-sm font-semibold text-foreground">
                  {item.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.info}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
