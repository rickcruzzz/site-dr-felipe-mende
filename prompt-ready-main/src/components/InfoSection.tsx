import infoConsultation from "@/assets/info-consultation.jpg";
import waitingRoom from "@/assets/waiting-room.jpg";

const InfoSection = () => {
  return (
    <section className="section-padding">
      <div className="container px-5 sm:px-6">
        {/* What is psychiatry */}
        <div className="mb-16 grid gap-8 sm:mb-20 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="heading-accent mb-8 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              O que e a Psiquiatria
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A Psiquiatria e a especialidade medica dedicada ao diagnostico,
                tratamento e prevencao de transtornos mentais, emocionais e
                comportamentais. O psiquiatra e um medico com formacao
                especializada, habilitado a realizar avaliacao clinica completa
                e prescrever tratamentos adequados a cada caso.
              </p>
              <p>
                Diferente do que muitos acreditam, procurar um psiquiatra nao
                significa "loucura" ou fraqueza. Transtornos como depressao,
                ansiedade e insonia sao condicoes medicas que afetam milhoes de
                pessoas e possuem tratamento eficaz quando conduzidos por um
                profissional qualificado.
              </p>
              <p>
                A abordagem moderna da psiquiatria e integrativa, considerando
                fatores biologicos, psicologicos e sociais. O tratamento pode
                envolver medicacao, psicoterapia, mudancas no estilo de vida,
                meditacao e outras intervencoes baseadas em evidencias
                cientificas.
              </p>
            </div>
          </div>
          <img
            src={infoConsultation}
            alt="Consulta psiquiatrica"
            className="h-80 w-full object-cover shadow-md lg:h-96"
          />
        </div>

        {/* How the consultation works */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <img
            src={waitingRoom}
            alt="Sala de espera da clinica"
            className="order-2 h-80 w-full object-cover shadow-md lg:order-1 lg:h-96"
          />
          <div className="order-1 lg:order-2">
            <h2 className="heading-accent mb-8 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Como Funciona a Consulta
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A primeira consulta psiquiatrica tem duracao aproximada de 50
                minutos a 1 hora. Nela, o medico realiza uma avaliacao completa
                do historico de saude, sintomas atuais, contexto de vida e
                expectativas do paciente.
              </p>
              <p>
                A partir dessa avaliacao, e elaborado um plano de tratamento
                individualizado, que pode incluir orientacoes sobre
                medicamentos, encaminhamento para psicoterapia, ajustes no
                estilo de vida e acompanhamento periodico.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:gap-6">
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-serif text-2xl font-semibold text-foreground">50 min</span>
                <span className="text-sm text-muted-foreground">Duracao media da consulta</span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-serif text-2xl font-semibold text-foreground">Online</span>
                <span className="text-sm text-muted-foreground">Teleconsulta disponivel</span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-serif text-2xl font-semibold text-foreground">Sigilo</span>
                <span className="text-sm text-muted-foreground">Total confidencialidade</span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-serif text-2xl font-semibold text-foreground">Retorno</span>
                <span className="text-sm text-muted-foreground">Acompanhamento continuo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
