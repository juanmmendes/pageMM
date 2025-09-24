import React, { useState } from "react";
import danielFoto from '../../assets/Daniel.jpeg';
import evianeFoto from '../../assets/Eviane.jpeg';
import giovannaFoto from '../../assets/Giovana.jpeg';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Scale,
  FileText,
  Users,
  ShieldCheck,
  ClipboardCheck,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  MapPin,
  Globe,
} from "lucide-react";

/**
 * Página-modelo de Área de Atuação — Direito Previdenciário
 *
 * Objetivo: servir como base para todas as páginas de áreas, mantendo o mesmo
 * padrão visual e componentes reutilizáveis da homepage.
 *
 * Tecnologias esperadas no projeto:
 * - TailwindCSS
 * - framer-motion
 * - lucide-react (ícones)
 *
 * Integração:
 * - Ajuste os links em LINKS conforme suas rotas reais.
 * - Copie este arquivo para /src/pages/areas/Previdenciario.jsx (sugestão).
 * - Exporte/registre a rota no seu router (React Router, Next.js, etc.).
 */

const THEME = {
  brand: {
    bg: "from-[#0B1020] via-[#0A0C14] to-[#0A0C14]",
    accent: "#E4B93C",
  },
  radius: "rounded-3xl",
};

const LINKS = {
  home: "/", // Altere para a rota da Página Principal
  whatsapp:
    "https://api.whatsapp.com/send/?phone=5519974100605&text&type=phone_number&app_absent=0",
  blog: "https://www.marinhomendes.adv.br/blog/",
  site: "https://marinhomendes.adv.br/",
  // Outras áreas (ajuste para suas rotas internas se preferir):
  areas: {
    civil: "https://marinhomendes.adv.br/direito-civil/",
    consumidor: "https://marinhomendes.adv.br/direito-do-consumidor/",
    familia: "https://marinhomendes.adv.br/direito-de-familia-e-sucessoes/",
    imobiliario: "https://marinhomendes.adv.br/direito-imobiliario/",
    medidasPF: "https://marinhomendes.adv.br/medidas-de-urgencia/",
  },
};

// Advogados responsáveis por Previdenciário (mapeados a partir da homepage)
const RESPONSAVEIS = [
  { nome: "Dr. Daniel Marinho Mendes", oab: "OAB/SP 286.959", foto: danielFoto },
  { nome: "Dra. Eviane de Oliveira Silva", oab: "OAB/SP 414.369", foto: evianeFoto },
  { nome: "Dra. Giovana Marques", oab: "OAB/SP 531.586", foto: giovannaFoto },
];

export default function AreaPrevidenciarioPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <div
      className={`min-h-screen text-white bg-gradient-to-b ${THEME.brand.bg} relative overflow-hidden`}
    >
      <AuroraBackground />
      <GridOverlay />

      {/* Header compacto com breadcrumb */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          <nav className="flex items-center gap-3 text-sm text-white/80">
            <Link
              to={LINKS.home}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Home className="h-4 w-4" /> Página principal
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white/60">Áreas</span>
            <span className="opacity-40">/</span>
            <strong className="text-white">Direito Previdenciário</strong>
          </nav>

          <a
            href={LINKS.whatsapp}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-4 py-2 text-xs font-semibold text-neutral-900 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <MessageCircle className="h-4 w-4" /> Fale agora
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative pt-10 sm:pt-16">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                  Direito{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-300">
                    Previdenciário
                  </span>
                </h1>
                <p className="mt-4 max-w-2xl text-white/70">
                  Orientação especializada para aposentadorias, benefícios e
                  revisões no INSS e nos regimes próprios (RPPS). Atuamos com
                  precisão técnica, ética e foco em resultados.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={LINKS.whatsapp}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <MessageCircle className="h-4 w-4" /> Consultar um advogado
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <Scale className="h-4 w-4" /> Serviços
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
                  <div className="inline-flex items-center gap-2">
                    <Globe className="h-4 w-4" /> Atuação nacional
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Seg–Sex 08:30–18:00
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <CardGradient className="p-6 sm:p-8">
                  <div className="mb-4">
                    <div className="flex items-center gap-3">
                      <IconCircle Icon={ShieldCheck} />
                      <div>
                        <div className="text-xs text-white/60">Orientação prática</div>
                        <div className="font-semibold tracking-tight">
                          Quando acionar o time previdenciário
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <div className="min-w-0">
                          <div className="text-sm font-medium">
                            Planejamento de aposentadoria
                          </div>
                          <p className="text-xs text-white/70">
                            Simulações de <strong>regras</strong>, <strong>carência</strong> e
                            <strong> tempo</strong> para escolher o melhor momento e estimar o
                            valor.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <div className="min-w-0">
                          <div className="text-sm font-medium">
                            Benefícios por incapacidade
                          </div>
                          <p className="text-xs text-white/70">
                            Auxílio/aposentadoria por <strong>incapacidade</strong>,
                            estratégia probatória e laudos médicos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <div className="min-w-0">
                          <div className="text-sm font-medium">
                            Tempo especial, PPP e LTCAT
                          </div>
                          <p className="text-xs text-white/70">
                            Atividade <strong>insalubre/perigosa</strong>, comprovação técnica e
                            conversão de tempo quando cabível.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <div className="min-w-0">
                          <div className="text-sm font-medium">
                            Revisões, recursos e ações
                          </div>
                          <p className="text-xs text-white/70">
                            Benefício <strong>negado</strong> ou com valor <strong>inferior</strong>?
                            Analisamos decadência/prescrição e fundamentos de revisão.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-white/60">
                    Diagnóstico inicial guiado por <strong>checklist</strong> de documentos e
                    simulações — comunicação clara, sem promessas irreais.
                  </div>
                </CardGradient>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <Section
          id="servicos"
          title="O que fazemos"
          subtitle="Consultivo, preventivo e contencioso administrativo/judicial."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={Scale}
              title="Aposentadorias"
              items={[
                "Idade urbana e rural",
                "Regra de transição",
                "Tempo especial",
                "Invalidez",
              ]}
            />
            <ServiceCard
              icon={FileText}
              title="Benefícios"
              items={[
                "Auxílio por incapacidade",
                "Pensão por morte",
                "Salário-maternidade",
                "BPC/LOAS",
              ]}
            />
            <ServiceCard
              icon={ClipboardCheck}
              title="Revisões e Cômputos"
              items={[
                "Revisão de cálculos",
                "Averbação de vínculos",
                "Reconhecimento de especial",
                "Conversão de tempo",
              ]}
            />
            <ServiceCard
              icon={Users}
              title="Para quem é"
              items={[
                "Trabalhadores urbanos e rurais",
                "Autônomos/MEI",
                "Servidores (RPPS)",
                "Empresas em auditoria previdenciária",
              ]}
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Defesas e Recursos"
              items={[
                "Defesa administrativa no INSS",
                "Recursos às JR e CRPS",
                "Ações e cumprimento de sentença",
                "Tutelas de urgência",
              ]}
            />
            <ServiceCard
              icon={AlertTriangle}
              title="Risco e Compliance"
              items={[
                "Mapeamento de tempo especial",
                "Provas técnicas e laudos",
                "Estratégia probatória",
                "Pareceres",
              ]}
            />
          </div>
        </Section>

        {/* COMO TRABALHAMOS */}
        <Section
          id="metodo"
          title="Como trabalhamos"
          subtitle="Fluxo simples, transparente e eficiente."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1) Diagnóstico",
                desc: "Levantamento de dados, CNIS, vínculos e documentos.",
                icon: FileText,
              },
              {
                title: "2) Estratégia",
                desc: "Cenários de benefício, simulações e plano de ação.",
                icon: ClipboardCheck,
              },
              {
                title: "3) Execução",
                desc: "Provas, protocolo no INSS/RPPS e acompanhamento.",
                icon: CheckCircle2,
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <CardGradient className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <IconCircle Icon={s.icon} />
                    <div>
                      <div className="font-semibold tracking-tight">{s.title}</div>
                      <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                    </div>
                  </div>
                </CardGradient>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* DIFERENCIAIS */}
        <Section
          id="diferenciais"
          title="Nossos diferenciais"
          subtitle="Atendimento humano, técnica apurada e comunicação clara."
        >
          <div className="relative z-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <DiffCard
              title="Ética e transparência"
              desc="Informação clara em cada etapa, sem promessas irreais."
              icon={ShieldCheck}
            />
            <DiffCard
              title="Atuação nacional"
              desc="Atendimento remoto e presencial, conforme a necessidade."
              icon={Globe}
            />
            <DiffCard
              title="Atualização constante"
              desc="Acompanhamento de legislação e jurisprudência."
              icon={BookOpen}
            />
            <DiffCard
              title="Foco no resultado"
              desc="Estratégia personalizada para o seu histórico contributivo."
              icon={CheckCircle2}
            />
          </div>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          title="Perguntas frequentes"
          subtitle="Respostas objetivas para as dúvidas mais comuns."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <FaqItem
              q="Quais documentos geralmente preciso?"
              a="Documentos pessoais, comprovantes de contribuição, CTPS, PPP/LTCAT para tempo especial, laudos médicos para incapacidade, certidões e CNIS atualizado. A lista final é personalizada após o diagnóstico."
            />
            <FaqItem
              q="Vocês atendem RPPS (servidores)?"
              a="Sim. Atuamos também em regimes próprios, com análise de regras locais, contagem recíproca e estratégias de averbação."
            />
            <FaqItem
              q="É possível revisar benefícios antigos?"
              a="Em muitos casos, sim. Avaliamos decadência e prescrição, fundamentos de revisão e impacto financeiro antes de propor a medida."
            />
            <FaqItem
              q="Honorários e prazos"
              a="Definidos conforme a complexidade do caso, sempre com contrato claro e cronograma estimado. Mantemos comunicação contínua sobre cada etapa."
            />
          </div>
        </Section>

        {/* CTA FINAL */}
        <section className="relative py-12 sm:py-16">
          <div className="mx-auto w-full max-w-7xl px-4">
            <CardGradient className="p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-3 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    Precisa de orientação previdenciária?
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Envie sua dúvida pelo WhatsApp e nosso time fará o primeiro
                    diagnóstico.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Campinas e Hortolândia/SP
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Seg–Sex 08:30–18:00
                    </span>
                  </div>
                </div>
                <div className="md:justify-self-end">
                  <a
                    href={LINKS.whatsapp}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90"
                  >
                    <MessageCircle className="h-4 w-4" /> Fale no WhatsApp
                  </a>
                </div>
              </div>
            </CardGradient>
          </div>
        </section>

        {/* ÁREAS RELACIONADAS */}
        <Section
          id="relacionadas"
          title="Outras áreas relacionadas"
          subtitle="Explore serviços que costumam se conectar a demandas previdenciárias."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-10">
            <RelatedArea title="Direito Civil" href={LINKS.areas.civil} />
            <RelatedArea
              title="Direito do Consumidor"
              href={LINKS.areas.consumidor}
            />
            <RelatedArea
              title="Família e Sucessões"
              href={LINKS.areas.familia}
            />
            <RelatedArea
              title="Direito Imobiliário"
              href={LINKS.areas.imobiliario}
            />
          </div>

          {/* Bloco único: responsáveis + CTA + atalhos (sem caixas redundantes) */}
          <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid gap-6 md:grid-cols-3 items-start">
              {/* Coluna: responsáveis e explicação */}
              <div className="md:col-span-2">
                <div className="text-xs text-white/60">Precisa de ajuda?</div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  Fale com o advogado responsável
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Estamos disponíveis para esclarecer dúvidas, avaliar documentos e
                  indicar o melhor caminho — de forma clara, técnica e sem promessas
                  irreais.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {RESPONSAVEIS.map((p, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {p.foto ? (
                        <img
                          src={p.foto}
                          alt={p.nome}
                          className="h-10 w-10 rounded-full object-cover border-2 border-amber-300/60 bg-white shadow"
                        />
                      ) : (
                        <div className="grid place-content-center h-8 w-8 rounded-full bg-white text-neutral-900 text-xs font-bold ring-2 ring-amber-300/50">
                          {p.nome
                            .split(" ")
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-sm font-medium">{p.nome}</div>
                        <div className="text-xs text-white/60">{p.oab}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna: CTA e atalhos leves */}
              <div className="md:justify-self-end w-full">
                <a
                  href={LINKS.whatsapp}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90"
                >
                  <MessageCircle className="h-4 w-4" /> Falar agora pelo WhatsApp
                </a>
                <div className="mt-3 text-xs text-white/60 space-y-1">
                  <div>Atendimento Seg–Sex 08:30–18:00</div>
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Campinas e Hortolândia/SP
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs text-white/60 mb-1">Atalhos</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    <a
                      href={LINKS.home}
                      className="inline-flex items-center gap-1 opacity-90 hover:opacity-100 hover:underline underline-offset-4"
                    >
                      <Home className="h-4 w-4" /> Página principal
                    </a>
                    <a
                      href={`${LINKS.home}#areas`}
                      className="inline-flex items-center gap-1 opacity-90 hover:opacity-100 hover:underline underline-offset-4"
                    >
                      <Scale className="h-4 w-4" /> Ver todas as áreas
                    </a>
                    <a
                      href={LINKS.blog}
                      className="inline-flex items-center gap-1 opacity-90 hover:opacity-100 hover:underline underline-offset-4"
                    >
                      <BookOpen className="h-4 w-4" /> Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Rodapé mínimo */}
      <footer className="relative border-t border-white/10 bg-neutral-950/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 text-xs text-white/60">
          © {new Date().getFullYear()} Marinho Mendes Sociedade de Advogados —
          Página de área (modelo).
        </div>
      </footer>
    </div>
  );
}

// ==========================
// SUBCOMPONENTES REUTILIZÁVEIS
// ==========================
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-white/70">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function CardGradient({ children, className = "" }) {
  return (
    <div
      className={`relative ${THEME.radius} p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent`}
    >
      <div
        className={`h-full w-full ${THEME.radius} border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

function IconCircle({ Icon }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 shadow-lg shadow-black/30">
      <Icon className="h-5 w-5" aria-hidden />
    </div>
  );
}

function ServiceCard({ icon: Icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <CardGradient className="p-6 h-full">
        <div className="flex items-start gap-4">
          <IconCircle Icon={Icon} />
          <div className="min-w-0">
            <div className="font-semibold tracking-tight">{title}</div>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              {items.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-0.5" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardGradient>
    </motion.div>
  );
}

function DiffCard({ title, desc, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <CardGradient className="p-6 h-full">
        <div className="flex items-start gap-4">
          <IconCircle Icon={Icon} />
          <div>
            <div className="font-semibold tracking-tight">{title}</div>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
          </div>
        </div>
      </CardGradient>
    </motion.div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <CardGradient className="p-4 sm:p-5">
      <button
        className="w-full text-left flex items-start justify-between gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium sm:text-lg">{q}</span>
        <span className="text-white/60">{open ? "–" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pt-3 text-sm text-white/70">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </CardGradient>
  );
}

function RelatedArea({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      <CardGradient className="p-6 h-full">
        <div className="flex items-start gap-4">
          <IconCircle Icon={Scale} />
          <div>
            <div className="font-semibold tracking-tight">{title}</div>
            <div className="mt-1 inline-flex items-center gap-2 text-xs text-white/70">
              <span>Saiba mais</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </CardGradient>
    </a>
  );
}

function AuroraBackground() {
  const orbs = [
    { x: -220, y: -120, size: 560, hue: "rgba(14,165,233,0.25)" },
    { x: 140, y: 20, size: 460, hue: "rgba(99,102,241,0.22)" },
    { x: -10, y: 200, size: 420, hue: "rgba(228,185,60,0.18)" },
  ];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 * i }}
          className="absolute blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            top: `calc(20% + ${o.y}px)`,
            left: `calc(60% + ${o.x}px)`,
            background: `radial-gradient(50% 50% at 50% 50%, ${o.hue} 0%, rgba(0,0,0,0) 70%)`,
            mixBlendMode: "screen",
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  );
}

function GridOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
    </div>
  );
}

/* ---------------------------------------------------------
   DEV SMOKE TESTS (não afetam produção; ajudam a flagrar erros de JSX)
---------------------------------------------------------- */
if (typeof window !== 'undefined') {
  console.assert(
    typeof AreaPrevidenciarioPage === 'function',
    'AreaPrevidenciarioPage deve ser um componente de função'
  );
}
