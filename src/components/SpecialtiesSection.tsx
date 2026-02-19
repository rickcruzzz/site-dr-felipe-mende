import neuroscience from "@/assets/neuroscience.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";

const specialties = [
  {
    title: "Depressao",
    description:
      "Diagnostico e tratamento de episodios depressivos, depressao recorrente e depressao resistente ao tratamento, com abordagem medicamentosa e psicoterapeutica.",
  },
  {
    title: "Transtornos de Ansiedade",
    description:
      "Tratamento de transtorno de ansiedade generalizada, sindrome do panico, fobias especificas e transtorno de ansiedade social.",
  },
  {
    title: "Transtorno Bipolar",
    description:
      "Acompanhamento especializado com estabilizacao do humor, prevencao de episodios e orientacao sobre estilo de vida.",
  },
  {
    title: "TDAH em Adultos",
    description:
      "Avaliacao diagnostica e tratamento do Transtorno de Deficit de Atencao e Hiperatividade na vida adulta.",
  },
  {
    title: "Insonia e Disturbios do Sono",
    description:
      "Avaliacao e tratamento de insonia cronica, higiene do sono e abordagens nao-farmacologicas.",
  },
  {
    title: "Psiquiatria Perinatal",
    description:
      "Saude mental da gestante e no pos-parto, incluindo depressao perinatal, ansiedade gestacional e dificuldades no vinculo mae-bebe.",
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="section-padding">
      <div className="container px-5 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="heading-accent heading-accent-center mb-6 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Especialidades
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
            Atendimento especializado nas principais areas da psiquiatria,
            com abordagem baseada em evidencias cientificas e tratamento individualizado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="border border-border bg-background p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 font-serif text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two images row */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <img
            src={neuroscience}
            alt="Neurociencia e saude mental"
            className="h-64 w-full object-cover"
          />
          <img
            src={therapyRoom}
            alt="Consultorio de psiquiatria"
            className="h-64 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
