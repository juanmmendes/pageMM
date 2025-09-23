import React, { useRef, useState, useEffect } from "react";
import logoUrl from './assets/LogoBranca.png';
import danielFoto from './assets/Daniel.jpeg';
import sergioFoto from './assets/Rodrigo.png';
import evianeFoto from './assets/Eviane.jpeg';
import giovannaFoto from './assets/Giovana.jpeg';
import gabrielFoto from './assets/Gabriel.jpeg';
import williansFoto from './assets/LogoBranca.png';
import escritorioUrl from './assets/escritorio.jpg';
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Building2,
  Briefcase,
  Gavel,
  Landmark,
  Scale,
  Shield,
  AlertTriangle,
  FileText,
  Users,
  Home,
  BookOpen,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

// ==========================
// HOMEPAGE – MARINHO MENDES (v6)
// Foco: correções de responsividade (hero, painel de contatos e cards da equipe)
// ==========================

const THEME = {
  brand: {
    bg: "from-[#0B1020] via-[#0A0C14] to-[#0A0C14]",
    accent: "#E4B93C",
    primary: "#4EA8FF",
  },
  radius: "rounded-3xl",
};

const AREAS_CNPJ = [
  { title: "Direito Societário", desc: "Constituição, alterações, acordos de sócios e governança.", icon: Building2, href: "https://marinhomendes.adv.br/direito-societario/" },
  { title: "Direito Empresarial", desc: "Consultoria preventiva, contratos e litígios empresariais.", icon: Briefcase, href: "https://marinhomendes.adv.br/direito-empresarial/" },
  { title: "Direito Trabalhista", desc: "Defesa patronal, compliance e negociação coletiva.", icon: Users, href: "https://marinhomendes.adv.br/direito-trabalhista/" },
  { title: "Direito Tributário", desc: "Planejamento fiscal, defesa administrativa e judicial.", icon: Landmark, href: "https://marinhomendes.adv.br/direito-tributario/" },
  { title: "Direito Imobiliário", desc: "Due diligence, locação, compra e venda, incorporações.", icon: Home, href: "https://marinhomendes.adv.br/direito-imobiliario-2/" },
  { title: "Direito Administrativo", desc: "Licitações, contratos públicos e parcerias.", icon: FileText, href: "https://marinhomendes.adv.br/direito-administrativo/" },
  { title: "Medidas de Urgência Empresarial", desc: "Tutelas para resguardar caixa, operações e ativos.", icon: AlertTriangle, href: "https://marinhomendes.adv.br/medidas-de-urgencia-empresarial/" },
  { title: "LGPD", desc: "Programa de adequação, políticas e incident response.", icon: Shield, href: "https://marinhomendes.adv.br/home/lgpd/" },
];

const AREAS_PF = [
  { title: "Direito Previdenciário", desc: "Aposentadorias, benefícios e revisões no INSS e RPPS.", icon: Scale, href: "https://marinhomendes.adv.br/direito-previdenciario/" },
  { title: "Direito Civil", desc: "Contratos, responsabilidade civil e obrigações.", icon: FileText, href: "https://marinhomendes.adv.br/direito-civil/" },
  { title: "Direito do Consumidor", desc: "Práticas abusivas, vícios de produtos e serviços.", icon: Gavel, href: "https://marinhomendes.adv.br/direito-do-consumidor/" },
  { title: "Direito Imobiliário", desc: "Compra e venda, locação, garantias e usucapião.", icon: Home, href: "https://marinhomendes.adv.br/direito-imobiliario/" },
  { title: "Família e Sucessões", desc: "Casamento, divórcio, guarda, alimentos e inventário.", icon: Users, href: "https://marinhomendes.adv.br/direito-de-familia-e-sucessoes/" },
  { title: "Medidas de Urgência", desc: "Tutelas para resguardar direitos e prevenir danos.", icon: AlertTriangle, href: "https://marinhomendes.adv.br/medidas-de-urgencia/" },
];

const EQUIPE = [
  {
    nome: "Dr. Daniel Marinho Mendes",
    oab: "OAB/SP 286.959",
    cargo: "Sócio • Previdenciário • Civil",
    formacao: [
      "Graduado em Direito – Universidade Paulista (UNIP)",
      "Pós-graduação em Direito Civil e Processual Civil – INESP",
      "Pós-graduação em Direito do Trabalho e Previdenciário – ESAMC",
    ],
    areas: ["Societário", "Empresarial", "Trabalhista", "Administrativo"],
    foto: danielFoto,
  },
  {
    nome: "Dr. Sergio Rodrigo Costa",
    oab: "OAB/SP 287.252",
    cargo: "Tributário • Empresarial",
    formacao: [
      "Graduado em Direito – Universidade Paulista (UNIP)",
      "Pós-graduação em Direito Público – ESAMC",
      "Pós-graduando em Direito Tributário – IBET",
    ],
    areas: ["Tributário", "Empresarial", "Civil", "Trabalhista"],
    foto: sergioFoto,
  },
  {
    nome: "Dra. Eviane de Oliveira Silva",
    oab: "OAB/SP 414.369",
    cargo: "Previdenciário • Civil • Consumidor",
    formacao: ["Graduada em Direito – Universidade Presbiteriana Mackenzie"],
    areas: ["Previdenciário", "Civil", "Consumidor", "Família e Sucessões"],
    foto: evianeFoto,
  },
  { nome: "Dr. Willians", oab: null, cargo: "Trabalhista • Empresarial", formacao: [], areas: ["Trabalhista", "Empresarial"], foto: williansFoto },
  { nome: "Dra. Giovanna", oab: null, cargo: "Imobiliário • Civil", formacao: [], areas: ["Imobiliário", "Civil"], foto: giovannaFoto },
  { nome: "Gabriel (Estagiário)", oab: null, cargo: "Pesquisa • Apoio jurídico", formacao: [], areas: ["Pesquisa", "Apoio"], foto: gabrielFoto },
];

const LINKS = {
  site: "https://marinhomendes.adv.br/",
  blog: "https://www.marinhomendes.adv.br/blog/",
  email: "mailto:adm@marinhomendes.adv.br",
  phoneCampinas: "tel:+551932090417",
  phoneHortolandia: "tel:+551938454946",
  whatsapp: "https://api.whatsapp.com/send/?phone=5519974100605&text&type=phone_number&app_absent=0",
  facebook: "https://www.facebook.com/marinhomendesadv",
  instagram: "https://www.instagram.com/marinhomendesadv",
  linkedin: "https://www.linkedin.com/company/14030512/",
  mapsCampinas: "https://maps.google.com/?q=Av.+Jos%C3%A9+Rocha+Bonfim%2C+214%2C+Campinas+SP",
  mapsHortolandia: "https://maps.google.com/?q=Rua+Ant%C3%B4nio+Nelson+Barbosa%2C+93%2C+Hortol%C3%A2ndia+SP",
  logo: logoUrl,
  fotoSobre: escritorioUrl,
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-white/70">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function CardGradient({ children, className = "" }) {
  return (
    <div className={`relative ${THEME.radius} p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent`}>
      <div className={`h-full w-full ${THEME.radius} border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}>
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

export default function HomepageMarinhoMendes() {
  const [tab, setTab] = useState("cnpj");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={`min-h-screen text-white bg-gradient-to-b ${THEME.brand.bg} relative overflow-hidden`}> 
      {/* Efeitos de fundo: aurora + grade sutil */}
      <AuroraBackground />
      <GridOverlay />

      {/* Brand ribbon */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[3px] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 opacity-80" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="Ir para início">
            <img src={LINKS.logo} alt="Logo Marinho Mendes" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="text-sm font-semibold uppercase tracking-widest">Marinho Mendes</div>
              <div className="text-xs text-white/70">Sociedade de Advogados</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex" aria-label="Navegação principal">
            <a href="#sobre" className="text-sm text-white/80 hover:text-white">Sobre</a>
            <a href="#areas" className="text-sm text-white/80 hover:text-white">Áreas</a>
            <a href="#equipe" className="text-sm text-white/80 hover:text-white">Equipe</a>
            <a href="#contato" className="text-sm text-white/80 hover:text-white">Contato</a>
            <a href={LINKS.blog} target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Blog
            </a>
          </nav>

          {/* CTA + mobile menu toggle */}
          <div className="flex items-center gap-2">
            <a
              href={LINKS.whatsapp}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-4 py-2 text-sm font-semibold text-neutral-900 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label="Fale no WhatsApp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-2 text-white"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur-xl"
              aria-label="Menu mobile"
            >
              <div className="mx-auto max-w-7xl px-4 py-3 grid gap-3">
                <a onClick={() => setMobileOpen(false)} href="#sobre" className="rounded-lg bg-white/5 px-3 py-2 text-sm">Sobre</a>
                <a onClick={() => setMobileOpen(false)} href="#areas" className="rounded-lg bg-white/5 px-3 py-2 text-sm">Áreas</a>
                <a onClick={() => setMobileOpen(false)} href="#equipe" className="rounded-lg bg-white/5 px-3 py-2 text-sm">Equipe</a>
                <a onClick={() => setMobileOpen(false)} href="#contato" className="rounded-lg bg-white/5 px-3 py-2 text-sm">Contato</a>
                <a onClick={() => setMobileOpen(false)} href={LINKS.blog} target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 px-3 py-2 text-sm">Blog</a>
                <a onClick={() => setMobileOpen(false)} href={LINKS.whatsapp} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-4 py-2 text-sm font-semibold text-neutral-900">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <main id="top" className="relative">
        <section className="relative pt-12 sm:pt-16">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-8 sm:gap-12">
              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-w-0"
              >
                <h1 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                  Excelência jurídica com <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-300">confiança</span> e inovação
                </h1>
                <p className="mt-4 max-w-2xl text-white/70">
                  Atuamos em todo o território nacional com soluções completas para pessoas físicas e jurídicas, viabilizando negócios e resolvendo conflitos com agilidade e segurança.
                </p>
                <blockquote className="mt-4 border-l-2 border-white/20 pl-4 text-sm italic text-white/70">
                  “O efeito da Justiça é a Paz e a Aplicação da Justiça a Segurança…” — Is. 32.17
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={LINKS.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <MessageCircle className="h-4 w-4" /> Fale com um advogado
                  </a>
                  <a href="#areas" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                    <Scale className="h-4 w-4" /> Áreas de atuação
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
                  <div className="inline-flex items-center gap-2"><Globe className="h-4 w-4"/> Atuação nacional</div>
                  <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> Seg–Sex 08:30–18:00</div>
                  <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4"/> Conformidade e ética</div>
                </div>
              </motion.div>

              {/* Painel de destaque com contatos – agora 100% fluido e sem quebra */}
              <motion.div
                className="relative w-full max-w-xl lg:max-w-none mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <CardGradient className="p-5 sm:p-6">
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                    <ContactItem Icon={Phone} label="Campinas" value="(19) 3209-0417" href={LINKS.phoneCampinas} />
                    <ContactItem Icon={Phone} label="Hortolândia" value="(19) 3845-4946" href={LINKS.phoneHortolandia} />
                    <ContactItem Icon={Mail} label="E-mail" value="adm@marinhomendes.adv.br" href={LINKS.email} />
                    <ContactItem Icon={Globe} label="Site" value="marinhomendes.adv.br" href={LINKS.site} />
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a aria-label="Facebook" href={LINKS.facebook} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100"><Facebook className="h-5 w-5"/></a>
                    <a aria-label="Instagram" href={LINKS.instagram} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100"><Instagram className="h-5 w-5"/></a>
                    <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100"><Linkedin className="h-5 w-5"/></a>
                    <a aria-label="Blog" href={LINKS.blog} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100"><BookOpen className="h-5 w-5"/></a>
                  </div>
                </CardGradient>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <Section id="sobre" title="Sobre nós" subtitle="Independência, atuação diversificada e compromisso com resultados.">
          <div className="grid gap-8 lg:grid-cols-2">
            <CardGradient className="p-6 sm:p-8">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                A <strong>Marinho Mendes Sociedade de Advogados</strong> é um escritório independente e de atuação diversificada, com vocação para prestar serviços jurídicos com <strong>qualidade</strong>, <strong>ética</strong> e <strong>excelência técnica</strong>.
                Representamos clientes em todo o território nacional, com atendimento <strong>eficaz e personalizado</strong>, suporte integral para <strong>viabilizar negócios</strong> e <strong>solucionar conflitos</strong> com rapidez e segurança.
                A disponibilidade dos advogados e os relacionamentos de confiança mútua são a base da nossa atuação.
              </p>
              <blockquote className="mt-6 border-l-2 border-white/20 pl-4 text-sm italic text-white/70">
                “O efeito da Justiça é a Paz e a Aplicação da Justiça a Segurança…” — Is. 32.17
              </blockquote>
            </CardGradient>

            <PhotoFrame alt="Escritório Marinho Mendes" />
          </div>
        </Section>

        {/* ÁREAS */}
        <Section id="areas" title="Áreas de atuação" subtitle="Atendimento a pessoas jurídicas e físicas.">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            <button onClick={() => setTab("cnpj")} className={`px-4 py-2 text-sm rounded-full transition ${tab === "cnpj" ? "bg-white text-neutral-900" : "text-white/80 hover:text-white"}`}>
              Pessoa Jurídica (CNPJ)
            </button>
            <button onClick={() => setTab("pf")} className={`px-4 py-2 text-sm rounded-full transition ${tab === "pf" ? "bg-white text-neutral-900" : "text-white/80 hover:text-white"}`}>
              Pessoa Física
            </button>
          </div>

          <AnimatePresence mode="wait">
            {tab === "cnpj" ? (
              <motion.div key="cnpj" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {AREAS_CNPJ.map((a, i) => (
                  <AreaCard key={i} {...a} />
                ))}
              </motion.div>
            ) : (
              <motion.div key="pf" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {AREAS_PF.map((a, i) => (
                  <AreaCard key={i} {...a} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Section>

        {/* EQUIPE – carrossel otimizado para mobile */}
        <Section id="equipe" title="Nossa equipe" subtitle="Carrossel com perfis completos e destaque visual.">
          <TeamCarousel people={EQUIPE} />
        </Section>

        {/* LOCAIS */}
        <Section id="contato" title="Locais de atendimento" subtitle="Atendimento mediante agendamento. Seg–Sex 08:30–18:00.">
          <div className="grid gap-6 md:grid-cols-2">
            <AddressCard
              cidade="Campinas/SP"
              endereco={[
                "Av. José Rocha Bonfim, nº 214",
                "Bloco J – Sala 228 – Ed. Milão Praça Capital",
                "Loteamento Center Santa Genebra",
                "CEP 13080-650",
              ]}
              fone="(19) 3209-0417"
              telHref={LINKS.phoneCampinas}
              mapsHref={LINKS.mapsCampinas}
            />
            <AddressCard
              cidade="Hortolândia/SP"
              endereco={[
                "Rua Antônio Nelson Barbosa, nº 93",
                "Bairro Jardim do Bosque",
                "CEP 13186-231",
              ]}
              fone="(19) 3845-4946"
              telHref={LINKS.phoneHortolandia}
              mapsHref={LINKS.mapsHortolandia}
            />
          </div>
        </Section>
      </main>

      {/* Rodapé */}
      <footer className="relative border-t border-white/10 bg-neutral-950/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest">Marinho Mendes</div>
              <div className="text-xs text-white/70">Sociedade de Advogados</div>
              <div className="mt-4 text-sm text-white/70">
                Atendimento mediante agendamento. Cada caso é único; esta página tem caráter institucional.
              </div>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold">Contatos</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4"/><a href={LINKS.email}>adm@marinhomendes.adv.br</a></li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href={LINKS.phoneCampinas}>(19) 3209-0417</a> (Campinas)</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href={LINKS.phoneHortolandia}>(19) 3845-4946</a> (Hortolândia)</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4"/> <a href={LINKS.whatsapp}>WhatsApp Oficial</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold">Online</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><Globe className="h-4 w-4"/><a href={LINKS.site} target="_blank" rel="noreferrer">Site institucional</a></li>
                <li className="flex items-center gap-2"><BookOpen className="h-4 w-4"/><a href={LINKS.blog} target="_blank" rel="noreferrer">Blog</a></li>
                <li className="flex items-center gap-2"><Facebook className="h-4 w-4"/><a href={LINKS.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
                <li className="flex items-center gap-2"><Instagram className="h-4 w-4"/><a href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
                <li className="flex items-center gap-2"><Linkedin className="h-4 w-4"/><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold">Horário</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4"/> Seg a Sex: 08:30–18:00</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4"/> Fim de semana: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Marinho Mendes Sociedade de Advogados. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Ajustes globais para esconder scrollbar do carrossel no WebKit */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar{ display:none; }
      `}</style>
    </div>
  );
}

// ==========================
// SUBCOMPONENTES
// ==========================
function ContactItem({ Icon, label, value, href }) {
  return (
    <a href={href} className="group w-full flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:translate-y-[-2px] transition">
      <IconCircle Icon={Icon} />
      <div className="min-w-0">
        <div className="text-xs text-white/60">{label}</div>
        <div className="text-sm font-medium break-words whitespace-normal group-hover:underline">{value}</div>
      </div>
    </a>
  );
}

function AreaCard({ title, desc, icon: Icon, href }) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      <CardGradient className="p-5 h-full">
        <div className="flex items-start gap-4">
          <IconCircle Icon={Icon} />
          <div className="min-w-0">
            <div className="font-semibold tracking-tight">{title}</div>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
            <div className="mt-3 inline-flex flex-wrap items-center gap-2 text-xs text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">Consultivo</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">Contencioso</span>
            </div>
            {href && (
              <div className="mt-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20"
                  aria-label={`Saiba mais sobre ${title}`}
                >
                  Saiba mais
                </a>
              </div>
            )}
          </div>
        </div>
      </CardGradient>
    </div>
  );
}

function TeamCarousel({ people }) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [paused, setPaused] = useState(false);

  const scrollBy = (delta) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Autoplay suave
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 12;
      if (end) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Fades laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0A0C14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0A0C14] to-transparent" />

      {/* Controles */}
      <div className="absolute -top-12 right-0 hidden sm:flex items-center gap-2">
        <button onClick={() => scrollBy(-360)} disabled={!canLeft} className={`rounded-full border border-white/10 bg-white/10 backdrop-blur px-3 py-2 ${canLeft ? "opacity-100" : "opacity-40"}`} aria-label="Anterior">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button onClick={() => scrollBy(360)} disabled={!canRight} className={`rounded-full border border-white/10 bg-white/10 backdrop-blur px-3 py-2 ${canRight ? "opacity-100" : "opacity-40"}`} aria-label="Próximo">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-5 pb-2 pr-1"
        style={{ scrollbarWidth: "none" }}
      >
        {people.map((p, i) => (
          <div key={i} className="snap-center shrink-0 basis-[88%] sm:basis-[46%] lg:basis-[31%]">
            <PersonCard {...p} />
          </div>
        ))}
      </div>

      {/* Barra de progresso do autoplay */}
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div className={`h-full w-1/3 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 animate-[progress_3.5s_linear_infinite] ${paused ? 'paused' : ''}`}></div>
      </div>
      <style>{`@keyframes progress { from{ transform: translateX(-100%);} to{ transform: translateX(300%);} } .paused{ animation-play-state: paused; }`}</style>
    </div>
  );
}

function PersonCard({ nome, cargo, oab, formacao = [], areas = [], foto }) {
  const initials = nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <CardGradient className="p-6 h-full">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0 w-16 h-16">
          {foto ? (
            <img
              src={foto}
              alt={nome}
              className="h-16 w-16 rounded-full object-cover border-2 border-amber-300/60 bg-white"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          ) : (
            <div className="grid h-16 w-16 place-content-center rounded-full bg-white text-neutral-900 font-bold">
              {initials}
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-amber-300/60" />
        </div>
        <div className="min-w-0 max-w-full">
          <div className="font-semibold tracking-tight break-words">{nome}</div>
          {cargo && <div className="text-xs text-white/60 break-words">{cargo}</div>}
          {oab && <div className="mt-1 text-xs text-white/60 break-words">{oab}</div>}
          {formacao.length > 0 && (
            <ul className="mt-2 list-disc pl-4 text-xs text-white/70 space-y-1">
              {formacao.map((f, i) => (
                <li key={i} className="break-words">{f}</li>
              ))}
            </ul>
          )}
          {areas.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {areas.map((a, i) => (
                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">{a}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardGradient>
  );
}

function AddressCard({ cidade, endereco, fone, telHref, mapsHref }) {
  return (
    <CardGradient className="p-6">
      <div className="mb-3 flex items-center gap-3">
        <IconCircle Icon={MapPin} />
        <div>
          <div className="font-semibold">{cidade}</div>
          <div className="text-xs text-white/70">Atendimento mediante agendamento</div>
        </div>
      </div>
      <ul className="space-y-1 text-sm text-white/80">
        {endereco.map((l, i) => (
          <li key={i} className="break-words">{l}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        <a href={telHref} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 hover:bg-white/10">
          <Phone className="h-4 w-4"/> {fone}
        </a>
        <a href={mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 hover:bg-white/10">
          <MapPin className="h-4 w-4"/> Ver no mapa
        </a>
      </div>
    </CardGradient>
  );
}

function PhotoFrame({ src, alt }) {
  const finalSrc = src || LINKS.fotoSobre;
  return (
    <div className="relative aspect-[4/3] w-full">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-300/20 via-white/5 to-transparent blur-xl" />
      <CardGradient className="h-full w-full overflow-hidden">
        {finalSrc ? (
          <img src={finalSrc} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(228,185,60,0.22),transparent_60%)]" />
            <div className="absolute inset-0 grid place-content-center text-center p-8">
              <div className="text-sm text-white/70">Espaço para foto do escritório/equipe</div>
              <div className="mt-2 text-xs text-white/50">Substitua por uma imagem profissional (1920×1080)</div>
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">MM</div>
          </div>
        )}
      </CardGradient>
    </div>
  );
}

function AuroraBackground() {
  const orbs = [
    { x: -220, y: -120, size: 560, hue: "rgba(14,165,233,0.25)" },
    { x: 140, y: 20, size: 460, hue: "rgba(99,102,241,0.22)" },
    { x: -10, y: 200, size: 420, hue: "rgba(228,185,60,0.18)" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {orbs.map((o, i) => (
        <motion.div key={i} initial={{ opacity: 0.0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2 * i }} className="absolute blur-3xl" style={{ width: o.size, height: o.size, top: `calc(20% + ${o.y}px)`, left: `calc(60% + ${o.x}px)`, background: `radial-gradient(50% 50% at 50% 50%, ${o.hue} 0%, rgba(0,0,0,0) 70%)`, mixBlendMode: "screen" }} />
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