import doctorImage from "@/assets/doctor-portrait.jpg";

const credentials = [
  "Graduacao em Medicina pela Universidade de Sao Paulo (USP)",
  "Residencia Medica em Psiquiatria pelo Hospital das Clinicas - FMUSP",
  "Especializacao em Psicoterapia Cognitivo-Comportamental pela PUC-SP",
  "Formacao em Terapia Cognitiva Baseada em Mindfulness (MBCT)",
  "Membro da Associacao Brasileira de Psiquiatria (ABP)",
  "Mais de 10 anos de experiencia e 5.000+ atendimentos",
  "Atendimento presencial e teleconsulta para todo o Brasil",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start lg:gap-12">
          {/* Photo */}
          <div className="lg:col-span-2">
            <img
              src={doctorImage}
              alt="Dr. Felipe Mendes"
              className="mx-auto w-full max-w-sm object-cover shadow-lg lg:mx-0"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="heading-accent mb-8 font-serif text-2xl font-semibold text-primary sm:text-3xl">
              Dr. Felipe Mendes
            </h2>
            <p className="mb-2 text-sm font-semibold text-muted-foreground">
              Psiquiatra em Sao Paulo/SP - CRM 142.857/SP | RQE 28.340
            </p>
            <div className="mb-8 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                O Dr. Felipe Mendes e um psiquiatra experiente, com pacientes em
                todo o Brasil, comprometido com a saude mental e o bem-estar de
                cada pessoa que atende. Ele entende que a saude mental e
                fundamental para a qualidade de vida e trabalha para oferecer
                solucoes eficazes e personalizadas.
              </p>
              <p>
                Sua abordagem e integrativa, considerando nao apenas os aspectos
                biologicos, mas tambem os psicologicos e sociais de cada
                paciente. Oferece terapia medicamentosa, tecnicas de terapia
                cognitivo-comportamental, meditacao e suplementacao baseada em
                evidencias.
              </p>
            </div>

            <h3 className="mb-4 font-serif text-lg font-medium text-foreground">
              Formacao e Titulacoes
            </h3>
            <ul className="space-y-2">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
