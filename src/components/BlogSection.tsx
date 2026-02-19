import blogDepression from "@/assets/blog-depression.jpg";
import blogAnxiety from "@/assets/blog-anxiety.jpg";
import blogPerinatal from "@/assets/blog-perinatal.jpg";
import blogSleep from "@/assets/blog-sleep.jpg";
import blogMindfulness from "@/assets/blog-mindfulness.jpg";
import blogTdah from "@/assets/blog-tdah.jpg";

const blogPosts = [
  {
    image: blogDepression,
    title: "Como identificar a depressao e quando procurar ajuda",
    excerpt:
      "A depressao vai muito alem da tristeza comum. Trata-se de um transtorno mental que afeta o humor, o pensamento e o comportamento, podendo interferir significativamente na vida cotidiana. Conheca os principais sinais de alerta e entenda quando e hora de buscar acompanhamento profissional.",
    date: "12 Jan 2026",
    tag: "Depressao",
  },
  {
    image: blogAnxiety,
    title: "Ansiedade: mitos e verdades que voce precisa saber",
    excerpt:
      "Sentir ansiedade e uma resposta natural do organismo. Porem, quando ela se torna constante, desproporcional e interfere nas atividades do dia a dia, pode configurar um transtorno. O Transtorno de Ansiedade Generalizada (TAG) e um dos mais comuns e atinge milhoes de brasileiros.",
    date: "28 Dez 2025",
    tag: "Ansiedade",
  },
  {
    image: blogPerinatal,
    title: "Psiquiatria perinatal: cuidando da saude mental da mae",
    excerpt:
      "Estima-se que 10 a 15% das mulheres sao acometidas por depressao durante a gestacao ou no pos-parto. O acompanhamento psiquiatrico perinatal e fundamental para a saude da mae e do bebe, com tratamentos que vao desde psicoterapia ate intervencao medicamentosa quando necessario.",
    date: "15 Nov 2025",
    tag: "Perinatal",
  },
  {
    image: blogSleep,
    title: "Insonia cronica: causas, consequencias e tratamento",
    excerpt:
      "A insonia cronica e um dos disturbios do sono mais prevalentes, afetando cerca de 30% da populacao adulta. Alem do cansaco, ela pode agravar quadros de ansiedade e depressao. O tratamento adequado envolve higiene do sono, terapia cognitivo-comportamental e, quando indicado, medicacao.",
    date: "02 Out 2025",
    tag: "Sono",
  },
  {
    image: blogMindfulness,
    title: "Meditacao e mindfulness no tratamento psiquiatrico",
    excerpt:
      "Estudos cientificos demonstram que a pratica regular de mindfulness pode reduzir significativamente sintomas de ansiedade e depressao. A Terapia Cognitiva Baseada em Mindfulness (MBCT) e uma abordagem validada para prevencao de recaidas em depressao recorrente.",
    date: "18 Set 2025",
    tag: "Mindfulness",
  },
  {
    image: blogTdah,
    title: "TDAH em adultos: diagnostico tardio e impacto na vida",
    excerpt:
      "O Transtorno de Deficit de Atencao e Hiperatividade nao afeta apenas criancas. Muitos adultos convivem com o TDAH sem diagnostico, enfrentando dificuldades no trabalho, nos relacionamentos e na organizacao pessoal. A avaliacao especializada e o primeiro passo para uma vida mais funcional.",
    date: "05 Ago 2025",
    tag: "TDAH",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-card">
      <div className="container px-5 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="heading-accent heading-accent-center mb-6 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Artigos e Informacoes
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
            Conteudo informativo sobre saude mental, baseado em evidencias
            cientificas, para auxiliar pacientes e familiares na compreensao
            dos transtornos psiquiatricos.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <span className="mb-2 block text-xs text-muted-foreground">
                  {post.date}
                </span>
                <h3 className="mb-3 font-serif text-lg font-medium leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">
                  Saiba mais
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
