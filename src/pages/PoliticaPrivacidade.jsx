import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Home, Mail, Phone } from "lucide-react";

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
    title: "1. Introdução",
    content: (
      <>
        <p>
          A Marinho Mendes Sociedade de Advogados (&quot;Marinho Mendes&quot; ou &quot;Escritório&quot;) respeita a privacidade e a proteção
          dos dados pessoais de clientes, potenciais clientes, parceiros e demais titulares que se relacionam conosco. Esta Política de
          Privacidade descreve, de forma clara e transparente, como coletamos, utilizamos, compartilhamos e armazenamos dados pessoais,
          bem como os direitos assegurados pela Lei Geral de Proteção de Dados (Lei n.º 13.709/2018 - LGPD) e pelas demais normas aplicáveis.
        </p>
        <p>
          Ao interagir com nossas plataformas digitais, preencher formulários, contratar nossos serviços ou estabelecer contato com nossa equipe,
          você concorda com as práticas descritas neste documento. Recomendamos a leitura atenta das seções abaixo e, em caso de dúvidas,
          disponibilizamos canais específicos para suporte.
        </p>
      </>
    ),
  },
  {
    title: "2. Dados pessoais que coletamos",
    content: (
      <>
        <p>
          O tipo de dado coletado depende do relacionamento que você mantém com o Escritório e da finalidade envolvida. Em linhas gerais,
          podem ser tratados os seguintes dados pessoais:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>
            <strong className="text-white">Dados de identificação:</strong> nome completo, CPF, RG, data de nascimento, estado civil, nacionalidade.
          </li>
          <li>
            <strong className="text-white">Dados de contato:</strong> endereço, e-mail, telefone, celular, contas de aplicativos de mensagens.
          </li>
          <li>
            <strong className="text-white">Dados profissionais:</strong> ocupação, empresa, cargo, histórico acadêmico ou profissional quando
            necessários para a condução do caso.
          </li>
          <li>
            <strong className="text-white">Dados sensíveis:</strong> informações de saúde, dados previdenciários ou outros dados especiais estritamente
            necessários para análise ou condução de demandas jurídicas, sempre observando as hipóteses legais da LGPD.
          </li>
          <li>
            <strong className="text-white">Dados técnicos:</strong> registros de acesso, endereço IP, informações de dispositivo, cookies e interações
            em nosso site, coletados automaticamente para fins de segurança, estatística e melhoria de experiência.
          </li>
        </ul>
        <p>
          Sempre que possível, solicitaremos apenas o mínimo necessário para cumprir a finalidade proposta, respeitando os princípios de necessidade
          e adequação previstos na legislação.
        </p>
      </>
    ),
  },
  {
    title: "3. Finalidades do tratamento",
    content: (
      <>
        <p>Tratamos dados pessoais para finalidades legítimas e previamente informadas, incluindo, mas não se limitando a:</p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>analisar solicitações e prestar serviços jurídicos nas áreas em que atuamos;</li>
          <li>viabilizar o contato e o relacionamento com clientes, inclusive para envio de atualizações processuais e materiais técnicos;</li>
          <li>responder a dúvidas, solicitações de orçamento, demandas de suporte ou mensagens enviadas por meio de nossos canais;</li>
          <li>cumprir obrigações legais, regulatórias e contratuais, incluindo prevenção à lavagem de dinheiro e fraudes;</li>
          <li>enviar comunicações institucionais, convites, newsletters e conteúdos informativos, sempre com opção de revogação;</li>
          <li>realizar análises internas, gestão administrativa, auditoria e melhoria contínua de processos e serviços;</li>
          <li>proteger direitos do Escritório, de seus clientes e terceiros em procedimentos judiciais, administrativos ou arbitrais.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Bases legais aplicáveis",
    content: (
      <>
        <p>
          Cada tratamento de dado pessoal é fundamentado em bases legais definidas pela LGPD, tais como: execução de contratos ou procedimentos
          preliminares, cumprimento de obrigação legal ou regulatória, exercício regular de direitos em processos, legítimo interesse do Escritório,
          proteção do crédito, tutela da saúde e consentimento do titular, quando aplicável. As bases específicas serão informadas sempre que solicitadas.
        </p>
      </>
    ),
  },
  {
    title: "5. Compartilhamento e operadores",
    content: (
      <>
        <p>
          O Escritório não comercializa dados pessoais. O compartilhamento ocorre apenas quando necessário e proporcional, nas seguintes hipóteses:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>
            Com profissionais, correspondentes e consultores externos envolvidos na execução dos serviços, sob dever de confidencialidade.
          </li>
          <li>Com órgãos públicos, autoridades judiciais, administrativas ou arbitrais, quando necessário para defesa de direitos.</li>
          <li>Com fornecedores de tecnologia, hospedagem, atendimento e backoffice que atuam como operadores conforme a LGPD.</li>
          <li>Com seguradoras, instituições financeiras e parceiros estratégicos previamente informados ao titular.</li>
        </ul>
        <p>
          Todos os terceiros envolvidos são avaliados e submetidos a obrigações contratuais de proteção de dados, segurança da informação e confidencialidade.
        </p>
      </>
    ),
  },
  {
    title: "6. Direitos dos titulares",
    content: (
      <>
        <p>
          Você possui os direitos previstos nos artigos 18 e seguintes da LGPD, incluindo: confirmação da existência de tratamento, acesso,
          correção de dados incompletos, anonimação, bloqueio ou eliminação, portabilidade, eliminação de dados tratados com consentimento,
          informação sobre compartilhamentos, revogação do consentimento e oposição a tratamentos ilícitos. Para exercê-los, utilize os canais
          indicados ao final desta política.
        </p>
      </>
    ),
  },
  {
    title: "7. Segurança da informação",
    content: (
      <>
        <p>
          Empregamos medidas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados, perda, alteração,
          divulgação ou qualquer forma de tratamento inadequado. Entre as medidas adotadas, destacam-se:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-white/70">
          <li>controle restrito de acesso lógico e físico aos sistemas;</li>
          <li>critérios de autenticação, senhas robustas e registro de logs;</li>
          <li>armazenamento em ambientes com monitoramento e backup periódico;</li>
          <li>treinamento contínuo da equipe e cláusulas contratuais de sigilo;</li>
          <li>planos de resposta a incidentes e comunicação responsável aos titulares e autoridades competentes, quando necessário.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Retenção e eliminação",
    content: (
      <>
        <p>
          Os dados pessoais são mantidos somente pelo tempo necessário para cumprir as finalidades informadas, atender a obrigações legais,
          preservar direitos do Escritório e observar prazos prescricionais aplicáveis. Após o período de retenção, os dados são eliminados,
          anonimizados ou armazenados de forma segura para eventual obrigação legal residual.
        </p>
      </>
    ),
  },
  {
    title: "9. Cookies e tecnologias similares",
    content: (
      <>
        <p>
          Utilizamos cookies estritamente necessários ao funcionamento do site, cookies analíticos que auxiliam na melhoria da experiência e,
          quando aplicável, cookies de terceiros vinculados a serviços incorporados. Você pode gerenciar as preferências diretamente no navegador,
          ciente de que a desativação de determinados cookies pode impactar funcionalidades do site.
        </p>
      </>
    ),
  },
  {
    title: "10. Transferências internacionais",
    content: (
      <>
        <p>
          Em alguns casos, fornecedores de tecnologia podem armazenar dados em servidores localizados fora do Brasil. Nessas hipóteses,
          garantimos que as transferências internacionais observem os requisitos da LGPD, com adoção de salvaguardas adequadas, cláusulas contratuais específicas
          e avaliações periódicas de conformidade.
        </p>
      </>
    ),
  },
  {
    title: "11. Dados de crianças e adolescentes",
    content: (
      <>
        <p>
          Nossos serviços são direcionados a pessoas com capacidade civil plena. Eventuais dados de menores de idade somente são coletados mediante
          consentimento dos responsáveis legais ou para exercício regular de direitos, sempre com o tratamento estritamente necessário ao caso concreto.
        </p>
      </>
    ),
  },
  {
    title: "12. Atualizações desta política",
    content: (
      <>
        <p>
          Esta política pode ser atualizada a qualquer momento para refletir alterações legislativas, regulatórias ou evoluções nos serviços prestados.
          A versão vigente estará sempre disponível nesta página, com indicação da data de última atualização. Recomendamos a revisão periódica do conteúdo.
        </p>
      </>
    ),
  },
  {
    title: "13. Contato do encarregado (DPO)",
    content: (
      <>
        <p>
          Para exercer direitos, esclarecer dúvidas ou solicitar informações adicionais sobre o tratamento de dados pessoais, entre em contato com o
          nosso encarregado de proteção de dados (DPO) pelos canais:
        </p>
        <ul className="list-none space-y-2 text-white/70">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-white/60" />
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center rounded-full px-2.5 py-1 text-white/80 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-white">
              {CONTACT.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-white/60" />
            <a href={CONTACT.phoneHref} className="inline-flex items-center rounded-full px-2.5 py-1 text-white/80 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-white">
              {CONTACT.phoneDisplay}
            </a>
            (Campinas) | WhatsApp institucional:{" "}
            <a href={CONTACT.whatsappHref} className="inline-flex items-center rounded-full px-2.5 py-1 text-white/80 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-white">
              {CONTACT.whatsappDisplay}
            </a>
          </li>
        </ul>
        <p>
          Você também pode consultar os{" "}
          <Link to="/termos-de-uso" className="inline-flex items-center rounded-full px-2.5 py-1 text-amber-300 no-underline transition-colors duration-200 hover:bg-amber-300/10 hover:text-amber-100">
            Termos de Uso
          </Link>{" "}
          para compreender as condições gerais de acesso e uso de nossas plataformas.
        </p>
      </>
    ),
  },
];

export default function PoliticaPrivacidadePage() {
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
            <span className="text-white font-medium">Política de Privacidade</span>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="pt-12 sm:pt-16 pb-10">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                <Shield className="h-4 w-4" />
                Documento oficial
              </div>
              <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight">
                Política de Privacidade
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/70">
                Diretrizes sobre o tratamento de dados pessoais realizado pela Marinho Mendes Sociedade de Advogados,
                em conformidade com a Lei Geral de Proteção de Dados e com as melhores práticas aplicáveis ao setor jurídico.
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/70">
                <div className="flex flex-col">
                  <dt className="text-white/50 uppercase tracking-[0.2em] text-xs">Última atualização</dt>
                  <dd>{LAST_UPDATE}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-white/50 uppercase tracking-[0.2em] text-xs">Escopo</dt>
                  <dd>Clientes, parceiros, fornecedores, visitantes e leads digitais</dd>
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
