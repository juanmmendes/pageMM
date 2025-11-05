import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, Home, Mail, Phone } from "lucide-react";

const THEME = {
  brand: {
    bg: "from-[#0B1020] via-[#0A0C14] to-[#0A0C14]",
    accent: "#E4B93C",
  },
  radius: "rounded-3xl",
};

const CONTACT = {
  email: "adm@marinhomendes.adv.br",
  phoneDisplay: "(19) 3209-0417",
  phoneHref: "tel:+551932090417",
  whatsappDisplay: "(19) 97410-0605",
  whatsappHref: "https://api.whatsapp.com/send/?phone=5519974100605&text&type=phone_number&app_absent=0",
};

const LAST_UPDATE = "26 de setembro de 2025";

const SECTIONS = [
  {
    title: "1. Apresentação e aceitação",
    content: (
      <>
        <p>
          Estes Termos de Uso regulam o acesso e a utilização do site institucional, landing pages e demais ambientes digitais mantidos pela Marinho Mendes Sociedade
          de Advogados (&quot;Marinho Mendes&quot; ou &quot;Escritório&quot;). Ao navegar nas plataformas, preencher formulários, baixar materiais ou interagir com qualquer
          funcionalidade disponibilizada, você declara ter lido, compreendido e concordado com as condições aqui estabelecidas. Caso não concorde, recomendamos interromper
          o uso imediatamente.
        </p>
      </>
    ),
  },
  {
    title: "2. Definições",
    content: (
      <>
        <p>Para fins destes Termos, aplicam-se as seguintes definições:</p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>
            <strong className="text-white">Usuário:</strong> toda pessoa física ou jurídica que acessa ou utiliza as plataformas digitais do Escritório.
          </li>
          <li>
            <strong className="text-white">Conteúdo:</strong> materiais, textos, imagens, vídeos, publicações e informações disponibilizadas pelo Escritório.
          </li>
          <li>
            <strong className="text-white">Plataformas:</strong> site institucional, blogs, landing pages, formulários e outras interfaces digitais de titularidade ou operação da Marinho Mendes.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Objeto das plataformas",
    content: (
      <>
        <p>
          As plataformas têm caráter exclusivamente informativo e institucional, destinadas à apresentação do Escritório, de suas áreas de atuação,
          equipe profissional, conteúdos jurídicos e canais de contato. Nenhuma informação disponibilizada deve ser interpretada como consultoria jurídica
          personalizada, recomendação definitiva ou proposta irrevogável de serviços.
        </p>
      </>
    ),
  },
  {
    title: "4. Uso permitido e boas práticas",
    content: (
      <>
        <p>O Usuário compromete-se a utilizar as plataformas de forma ética, observando a legislação vigente, em especial:</p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>fornecer informações verdadeiras e atualizadas ao preencher formulários ou iniciar contato;</li>
          <li>respeitar as regras da Ordem dos Advogados do Brasil (OAB) e demais normas aplicáveis à publicidade e à contratação de serviços advocatícios;</li>
          <li>utilizar os conteúdos apenas para fins pessoais e não comerciais, salvo autorização expressa do Escritório;</li>
          <li>abster-se de qualquer ato que possa comprometer a segurança das plataformas, como tentativas de invasão, injeção de código malicioso ou engenharia reversa.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Solicitações e envio de informações",
    content: (
      <>
        <p>
          O envio de dados pelos formulários disponíveis tem como objetivo possibilitar o atendimento inicial pelo Escritório. As mensagens recebidas são analisadas pela equipe,
          que poderá entrar em contato para solicitar informações adicionais, apresentar proposta de serviços ou declinar o atendimento quando houver impedimentos éticos ou técnicos.
          O envio de informações não cria, por si só, relação advogado-cliente.
        </p>
      </>
    ),
  },
  {
    title: "6. Conteúdo informativo e materiais técnicos",
    content: (
      <>
        <p>
          Artigos, boletins, e-books e demais materiais publicados refletem interpretações jurídicas vigentes na data de sua elaboração. O Usuário deve avaliar se o conteúdo ainda está
          atualizado antes de utilizá-lo como referência. O Escritório não se responsabiliza por decisões tomadas exclusivamente com base nas informações divulgadas sem assessoria profissional adequada.
        </p>
      </>
    ),
  },
  {
    title: "7. Condutas proibidas",
    content: (
      <>
        <p>São expressamente vedadas, entre outras condutas:</p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>utilizar as plataformas para fins ilícitos, imorais ou que infrinjam direitos de terceiros;</li>
          <li>disseminar vírus, worms, bots, cavalos de troia ou quaisquer códigos maliciosos;</li>
          <li>tentar acessar áreas restritas sem autorização ou sobrecarregar a infraestrutura tecnológica;</li>
          <li>copiar, reproduzir, distribuir ou modificar conteúdos sem autorização prévia e expressa da Marinho Mendes;</li>
          <li>violar direitos autorais, de imagem, honra, privacidade ou sigilo profissional.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Propriedade intelectual",
    content: (
      <>
        <p>
          Todos os direitos relativos às marcas, nomes empresariais, logotipos, domínios, layouts, textos, imagens, vídeos, documentos e demais conteúdos pertencem à Marinho Mendes
          ou a terceiros devidamente licenciados. É vedada qualquer forma de exploração comercial ou reprodução não autorizada, sob pena das medidas legais cabíveis.
        </p>
      </>
    ),
  },
  {
    title: "9. Links externos e conteúdos de terceiros",
    content: (
      <>
        <p>
          As plataformas podem conter links para sites, aplicativos e serviços de terceiros. Esses ambientes possuem políticas próprias e independentes, não sendo o Escritório responsável pelo conteúdo,
          segurança, práticas de privacidade ou disponibilidade. Recomendamos que o Usuário revise os termos e políticas dos respectivos terceiros antes de compartilhar dados ou utilizar funcionalidades externas.
        </p>
      </>
    ),
  },
  {
    title: "10. Responsabilidade e garantias",
    content: (
      <>
        <p>
          O Escritório envida esforços razoáveis para manter as plataformas seguras, atualizadas e acessíveis. Todavia, não garante a ausência de falhas técnicas, indisponibilidade temporária ou incorreções de conteúdo.
          Na máxima extensão permitida em lei, o Escritório não responde por danos diretos ou indiretos decorrentes do uso inadequado das informações, de decisões tomadas sem orientação jurídica adequada ou de eventos de força maior.
        </p>
      </>
    ),
  },
  {
    title: "11. Privacidade e proteção de dados",
    content: (
      <>
        <p>
          O tratamento de dados pessoais decorrente do uso das plataformas é disciplinado pela nossa{" "}
          <Link to="/politica-de-privacidade" className="text-amber-300 underline hover:text-amber-200">
            Política de Privacidade
          </Link>. Reforçamos que dados sensíveis, documentos confidenciais ou informações estratégicas somente devem ser compartilhados por canais previamente acordados com o Escritório.
        </p>
      </>
    ),
  },
  {
    title: "12. Alterações destes termos",
    content: (
      <>
        <p>
          Os Termos de Uso podem ser revistos periodicamente para refletir mudanças na legislação, nas funcionalidades disponibilizadas ou nas diretrizes internas do Escritório.
          A data da última atualização será sempre indicada no topo desta página. O uso contínuo das plataformas após a publicação das alterações representa aceitação da versão vigente.
        </p>
      </>
    ),
  },
  {
    title: "13. Lei aplicável e foro",
    content: (
      <>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Campinas, Estado de São Paulo, como competente para dirimir quaisquer controvérsias,
          com renúncia expressa a qualquer outro, por mais privilegiado que seja, salvo estipulação diversa em contratos específicos firmados com clientes.
        </p>
      </>
    ),
  },
  {
    title: "14. Contato",
    content: (
      <>
        <p>
          Dúvidas, sugestões ou notificações relacionadas a estes Termos podem ser encaminhadas aos canais oficiais:
        </p>
        <ul className="list-none space-y-2 text-white/70">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-white/60" />
            <a href={`mailto:${CONTACT.email}`} className="underline hover:text-white">
              {CONTACT.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-white/60" />
            <a href={CONTACT.phoneHref} className="underline hover:text-white">
              {CONTACT.phoneDisplay}
            </a>
            (Campinas) | WhatsApp institucional:{" "}
            <a href={CONTACT.whatsappHref} className="underline hover:text-white">
              {CONTACT.whatsappDisplay}
            </a>
          </li>
        </ul>
        <p>
          Caso receba comunicações suspeitas em nome do Escritório, entre em contato pelos canais acima antes de adotar qualquer medida.
        </p>
      </>
    ),
  },
];

export default function TermosUsoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className={`min-h-screen text-white bg-gradient-to-b ${THEME.brand.bg} relative overflow-hidden`}>
      <AuroraBackground />
      <GridOverlay />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-6xl px-4 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/70">
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-white transition">
              <Home className="h-4 w-4" />
              <span>Início</span>
            </Link>
            <span className="opacity-40">/</span>
            <span>Documentos institucionais</span>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">Termos de Uso</span>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="pt-12 sm:pt-16 pb-10">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                <FileText className="h-4 w-4" />
                Documento oficial
              </div>
              <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight">
                Termos de Uso
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/70">
                Condições gerais que regem o acesso e a utilização das plataformas digitais da Marinho Mendes Sociedade de Advogados.
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/70">
                <div className="flex flex-col">
                  <dt className="text-white/50 uppercase tracking-[0.2em] text-xs">Última atualização</dt>
                  <dd>{LAST_UPDATE}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-white/50 uppercase tracking-[0.2em] text-xs">Escopo</dt>
                  <dd>Usuários do site, landing pages e conteúdos institucionais</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto w-full max-w-4xl px-4">
            <article className="space-y-10">
              {SECTIONS.map((section) => (
                <DocumentSection key={section.title} title={section.title}>
                  {section.content}
                </DocumentSection>
              ))}
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

function DocumentSection({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-sm sm:text-base text-white/70 leading-relaxed">
        {children}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-6" />
    </section>
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
        <div
          key={i}
          className="absolute blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            top: `calc(30% + ${o.y}px)`,
            left: `calc(55% + ${o.x}px)`,
            background: `radial-gradient(50% 50% at 50% 50%, ${o.hue} 0%, rgba(0,0,0,0) 70%)`,
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  );
}

function GridOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
    </div>
  );
}
