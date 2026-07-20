const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".nav a");
const urgentBar = document.querySelector(".urgent-bar");
const aboutHeadline = document.querySelector(".about-headline");
const aboutHeadlinePrimary = document.getElementById("about-headline-primary");
const aboutHeadlineAccent = document.getElementById("about-headline-accent");

const projectType = document.getElementById("project-type");
const clientName = document.getElementById("client-name");
const clientWhatsapp = document.getElementById("client-whatsapp");
const clientEmail = document.getElementById("client-email");
const projectInvestmentRange = document.getElementById(
  "project-investment-range",
);
const projectGoalGroup = document.getElementById("project-goal-group");
const projectGoalFeedback = document.getElementById("project-goal-feedback");
const projectGoalInputs = Array.from(
  document.querySelectorAll('input[name="project-goals"]'),
);
const projectBusinessBranch = document.getElementById(
  "project-business-branch",
);
const projectSegmentation = document.getElementById("project-segmentation");
const projectSegmentOther = document.getElementById("project-segment-other");
const segmentOtherWrap = document.getElementById("segment-other-wrap");
const recommendTitle = document.getElementById("recommend-title");
const recommendText = document.getElementById("recommend-text");
const recommendAiExplanation = document.getElementById(
  "recommend-ai-explanation",
);
const recommendList = document.getElementById("recommend-list");
const recommendTemplateCard = document.getElementById(
  "recommend-template-card",
);
const ctaWhatsapp = document.getElementById("cta-whatsapp");
const aiFollowProjectButton = document.getElementById("ai-follow-project");
const aiChooseOtherButton = document.getElementById("ai-choose-other");
const aiSuggestionText = document.getElementById("ai-suggestion-text");
const aiDecisionFeedback = document.getElementById("ai-decision-feedback");
const serviceRequestButtons = Array.from(
  document.querySelectorAll(".template-card .btn"),
);
const contactForm = document.querySelector("#contato .contact-form");
const contactSubmitButton = contactForm?.querySelector("button.btn");
const contactNameField = contactForm?.querySelector('input[name="nome"]');
const contactPhoneField = contactForm?.querySelector('input[name="telefone"]');
const contactEmailField = contactForm?.querySelector('input[name="email"]');
const contactBusinessField = contactForm?.querySelector('select[name="ramo"]');
const contactGoalField = contactForm?.querySelector('select[name="objetivo"]');
const contactMessageField = contactForm?.querySelector(
  'textarea[name="mensagem"]',
);

const portfolioGrid = document.getElementById("portfolio-grid");
const adminProjectForm = document.getElementById("admin-project-form");
const adminName = document.getElementById("admin-name");
const adminType = document.getElementById("admin-type");
const adminBusinessBranch = document.getElementById("admin-business-branch");
const adminSegmentation = document.getElementById("admin-segmentation");
const adminSegmentationOtherWrap = document.getElementById(
  "admin-segmentation-other-wrap",
);
const adminSegmentationOther = document.getElementById(
  "admin-segmentation-other",
);
const adminDescription = document.getElementById("admin-description");
const adminUrl = document.getElementById("admin-url");
const adminOrder = document.getElementById("admin-order");
const adminStatus = document.getElementById("admin-status");
const adminCoverPreview = document.getElementById("admin-cover-preview");
const adminCoverUpload = document.getElementById("admin-cover-upload");
const adminRemoveCoverButton = document.getElementById("admin-remove-cover");
const adminNewProjectButton = document.getElementById("admin-new-project");
const adminAutofillUrlButton = document.getElementById("admin-autofill-url");
const adminCommercialFocus = document.getElementById("admin-commercial-focus");
const adminGenerateDescriptionAiButton = document.getElementById(
  "admin-generate-description-ai",
);
const adminFeedback = document.getElementById("admin-feedback");
const adminProjectFields = document.getElementById("admin-project-fields");
const adminSection = document.getElementById("admin");
const adminLoginSection = document.getElementById("admin-login");
const adminLoginForm = document.getElementById("admin-login-form");
const adminLoginUser = document.getElementById("admin-login-user");
const adminLoginPassword = document.getElementById("admin-login-password");
const adminGoogleContinueButton = document.getElementById(
  "admin-google-continue",
);
const adminForgotPasswordButton = document.getElementById(
  "admin-forgot-password",
);
const adminLoginFeedback = document.getElementById("admin-login-feedback");
const adminLogoutButton = document.getElementById("admin-logout");
const adminProjectManager = document.getElementById("admin-project-manager");
const adminManagerFeedback = document.getElementById("admin-manager-feedback");
const adminLoginTriggers = document.querySelectorAll(".admin-login-trigger");
const syncUrlsInput = document.getElementById("sync-urls");
const syncUrlsButton = document.getElementById("sync-urls-btn");
const syncUrlsFeedback = document.getElementById("sync-urls-feedback");
const supabaseUrlInput = document.getElementById("supabase-url");
const supabaseAnonKeyInput = document.getElementById("supabase-anon-key");
const supabaseTableInput = document.getElementById("supabase-table");
const supabaseBucketInput = document.getElementById("supabase-bucket");
const supabaseConnectButton = document.getElementById("supabase-connect");
const supabaseSyncNowButton = document.getElementById("supabase-sync-now");
const supabaseDisconnectButton = document.getElementById("supabase-disconnect");
const supabaseStatus = document.getElementById("supabase-status");

const connectGithubButton = document.getElementById("connect-github");
const connectNetlifyButton = document.getElementById("connect-netlify");
const externalConnectStatus = document.getElementById(
  "external-connect-status",
);

const storageKey = "vts_public_projects";
const projectCoversKey = "vts_project_covers";
const projectOrdersKey = "vts_project_orders";
const supabaseConfigKey = "vts_supabase_config";
const adminSessionKey = "vts_admin_authenticated";
const adminCredentialsKey = "vts_admin_credentials";
const ADMIN_USERNAME = "vilarinhotechsolutionsvts@gmail.com";
const ADMIN_PASSWORD = "adminvts@1997.";
const LEGACY_ADMIN_USERNAMES = ["admin"];
const LEGACY_ADMIN_PASSWORDS = ["123456", "adminvts1997!"];
const MASTER_ADMIN_EMAIL = "vilarinhotechsolutionsvts@gmail.com";
let isAuthorizedAdmin = false;
let editingProjectKey = null;
let syncAdminSegmentationState = null;
let selectedCustomCoverDataUrl = "";
let isManualCoverSelection = false;
let supabaseClient = null;
let supabaseRealtimeChannel = null;

const defaultProjects = [
  {
    name: "Cartao Digital",
    type: "Cartao Digital",
    description: "Perfil + botoes + WhatsApp para contato rapido.",
    url: "",
  },
  {
    name: "Landing Page",
    type: "Landing Page",
    description: "Headline + oferta + CTA para captacao de leads.",
    url: "",
  },
  {
    name: "Site Institucional",
    type: "Site Institucional",
    description: "Home + sobre + contato para autoridade da marca.",
    url: "",
  },
  {
    name: "E-commerce",
    type: "E-commerce",
    description: "Vitrine + carrinho + checkout para vendas online.",
    url: "",
  },
  {
    name: "Sistema Web",
    type: "Sistema Web",
    description: "Dashboard + processos + relatorios para produtividade.",
    url: "",
  },
  {
    name: "Plataforma SaaS",
    type: "Plataforma SaaS",
    description: "Assinatura + area logada para produto digital recorrente.",
    url: "",
  },
  {
    name: "Marketplace",
    type: "Marketplace",
    description: "Multilojas + pagamentos em uma plataforma unica.",
    url: "",
  },
];

const goalMap = {
  "vender-online": {
    label: "Vender produtos online",
    title: "Foco em vendas online",
    text: "Seu objetivo pede uma estrutura voltada para conversao e pagamento facilitado.",
    tips: [
      "Priorize paginas de produto com CTA forte.",
      "Integre meios de pagamento e recuperacao de carrinho.",
      "Inclua prova social e gatilhos de confianca.",
    ],
  },
  "captar-leads": {
    label: "Gerar leads e captar clientes",
    title: "Foco em geracao de leads",
    text: "Uma jornada curta com oferta clara tende a gerar mais contatos qualificados.",
    tips: [
      "Crie uma oferta principal com prova de resultado.",
      "Defina uma jornada curta ate o contato comercial.",
      "Monitore taxa de conversao por campanha e publico.",
    ],
  },
  autoridade: {
    label: "Fortalecer autoridade da marca",
    title: "Foco em posicionamento da marca",
    text: "Seu projeto deve fortalecer autoridade e confianca para facilitar o fechamento.",
    tips: [
      "Estruture posicionamento com proposta de valor clara.",
      "Fortaleca identidade visual e consistencia da comunicacao.",
      "Publique conteudo tecnico para ampliar confianca da marca.",
    ],
  },
  automatizar: {
    label: "Automatizar processos internos",
    title: "Foco em eficiencia operacional",
    text: "Voce precisa de recursos para reduzir tarefas manuais e ganhar escala.",
    tips: [
      "Priorize tarefas repetitivas para ganhos rapidos de produtividade.",
      "Estruture etapas operacionais com responsabilidades claras.",
      "Integre sistemas para reduzir retrabalho entre equipes.",
    ],
  },
  "produto-digital": {
    label: "Lancar produto digital",
    title: "Foco em produto digital",
    text: "O ideal e combinar aquisicao, onboarding e retencao em uma plataforma organizada.",
    tips: [
      "Valide MVP com paginas de entrada e lista de espera.",
      "Inclua area logada e metricas de uso.",
      "Planeje evolucao por versoes com base em dados.",
    ],
  },
  "agendar-atendimentos": {
    label: "Organizar agenda e atendimentos",
    title: "Foco em agenda e operacao de atendimento",
    text: "Seu projeto precisa facilitar agendamentos e reduzir faltas com confirmacoes automaticas.",
    tips: [
      "Organize janelas de atendimento para evitar sobrecarga operacional.",
      "Padronize confirmacao e lembretes para reduzir faltas.",
      "Crie visao central das agendas para acelerar tomada de decisao.",
    ],
  },
  "suporte-cliente": {
    label: "Melhorar suporte e relacionamento",
    title: "Foco em experiencia do cliente",
    text: "Centralizar atendimento melhora tempo de resposta e aumenta satisfacao.",
    tips: [
      "Conecte canais de contato em uma jornada unica.",
      "Use FAQ estrategico para reduzir duvidas repetitivas.",
      "Automatize resposta inicial e distribuicao de tickets.",
    ],
  },
  "escalar-operacao": {
    label: "Escalar operacao com previsibilidade",
    title: "Foco em escala e padronizacao",
    text: "Para escalar, voce precisa padronizar processos e acompanhar indicadores de desempenho.",
    tips: [
      "Defina etapas padrao para vendas e atendimento.",
      "Crie dashboard com metas, funil e produtividade.",
      "Automatize notificacoes e alertas de gargalo.",
    ],
  },
  "fidelizar-clientes": {
    label: "Aumentar retencao e fidelizacao",
    title: "Foco em recorrencia e fidelizacao",
    text: "Sua estrategia deve aumentar recompra e relacionamento de longo prazo.",
    tips: [
      "Implemente campanhas segmentadas por perfil de cliente.",
      "Adicione beneficios para clientes recorrentes.",
      "Monitore taxa de retorno e ticket medio por base ativa.",
    ],
  },
  "validar-oferta": {
    label: "Validar nova oferta ou servico",
    title: "Foco em validacao de mercado",
    text: "O projeto deve testar rapidamente interesse real antes de ampliar investimento.",
    tips: [
      "Monte pagina de validacao com proposta clara.",
      "Use CTA de pre-cadastro para medir demanda.",
      "Acompanhe conversao por origem e perfil.",
    ],
  },
};

const recommendationProjectTypes = [
  "Cartão Digital",
  "Landing Page",
  "Site Institucional",
  "E-commerce",
  "Sistema Web",
  "Plataforma SaaS",
  "Marketplace",
];

const segmentationsByBusinessBranch = {
  "Construção Civil": [
    "Construtora",
    "Reformas Residenciais",
    "Reformas Comerciais",
    "Engenharia Civil",
    "Arquitetura",
    "Design de Interiores",
    "Marcenaria",
    "Marmoraria",
    "Vidraçaria",
    "Serralheria",
    "Pintura",
    "Gesso",
    "Drywall",
    "Elétrica",
    "Hidráulica",
    "Impermeabilização",
    "Coberturas",
    "Energia Solar",
    "Paisagismo",
  ],
  Saúde: [
    "Clínica Médica",
    "Clínica Odontológica",
    "Clínica Veterinária",
    "Psicologia",
    "Psiquiatria",
    "Nutrição",
    "Fisioterapia",
    "Fonoaudiologia",
    "Terapia Ocupacional",
    "Laboratório",
    "Farmácia",
    "Hospital",
    "Home Care",
  ],
  "Beleza e Estética": [
    "Salão de Beleza",
    "Barbearia",
    "Clínica de Estética",
    "Designer de Sobrancelhas",
    "Lash Designer",
    "Manicure",
    "Podologia",
    "Maquiagem",
    "Massoterapia",
    "Depilação",
  ],
  Alimentação: [
    "Restaurante",
    "Hamburgueria",
    "Pizzaria",
    "Churrascaria",
    "Sushi",
    "Lanchonete",
    "Padaria",
    "Cafeteria",
    "Confeitaria",
    "Buffet",
    "Marmitaria",
    "Food Truck",
  ],
  Automotivo: [
    "Oficina Mecânica",
    "Auto Elétrica",
    "Centro Automotivo",
    "Lava Car",
    "Funilaria",
    "Pintura Automotiva",
    "Autopeças",
    "Pneus",
    "Guincho",
    "Concessionária",
  ],
  Jurídico: [
    "Advocacia Trabalhista",
    "Advocacia Cível",
    "Advocacia Empresarial",
    "Advocacia Previdenciária",
    "Advocacia Criminal",
    "Advocacia Tributária",
    "Consultoria Jurídica",
  ],
  Contabilidade: [
    "Escritório Contábil",
    "Consultoria Fiscal",
    "BPO Financeiro",
    "Auditoria",
    "Planejamento Tributário",
  ],
  Educação: [
    "Escola",
    "Faculdade",
    "Curso Profissionalizante",
    "Escola de Idiomas",
    "Curso Online",
    "Reforço Escolar",
    "Creche",
  ],
  "Tecnologia da Informação": [
    "Software House",
    "Desenvolvimento Web",
    "Desenvolvimento Mobile",
    "SaaS",
    "Inteligência Artificial",
    "Business Intelligence",
    "Power BI",
    "Automação",
    "Cloud Computing",
    "Segurança da Informação",
    "Infraestrutura",
    "Suporte Técnico",
  ],
  Imobiliário: [
    "Imobiliária",
    "Corretor de Imóveis",
    "Incorporadora",
    "Loteadora",
    "Condomínio",
    "Administração de Imóveis",
  ],
  Financeiro: [
    "Banco",
    "Cooperativa de Crédito",
    "Fintech",
    "Corretora",
    "Seguradora",
    "Consórcio",
  ],
  Logística: [
    "Transportadora",
    "Frete",
    "Distribuidora",
    "Centro de Distribuição",
    "Armazém",
    "Operador Logístico",
  ],
  Turismo: [
    "Agência de Viagens",
    "Hotel",
    "Pousada",
    "Resort",
    "Guia Turístico",
    "Locadora de Veículos",
  ],
  Eventos: [
    "Cerimonial",
    "Buffet",
    "Decoração",
    "Fotografia",
    "Filmagem",
    "DJ",
    "Banda",
    "Espaço para Eventos",
  ],
  Comércio: [
    "Loja de Roupas",
    "Loja de Calçados",
    "Supermercado",
    "Mercado",
    "Material de Construção",
    "Loja de Informática",
    "Papelaria",
    "Joalheria",
    "Ótica",
    "Livraria",
    "Floricultura",
  ],
  Indústria: [
    "Metalúrgica",
    "Alimentícia",
    "Farmacêutica",
    "Química",
    "Plástica",
    "Têxtil",
    "Moveleira",
    "Automotiva",
  ],
  Agronegócio: [
    "Fazenda",
    "Pecuária",
    "Agricultura",
    "Avicultura",
    "Piscicultura",
    "Cooperativa",
    "Revenda Agrícola",
    "Máquinas Agrícolas",
  ],
  Pet: [
    "Pet Shop",
    "Clínica Veterinária",
    "Banho e Tosa",
    "Hotel para Pets",
    "Creche para Pets",
    "Adestramento",
  ],
  Esportes: [
    "Academia",
    "CrossFit",
    "Pilates",
    "Funcional",
    "Personal Trainer",
    "Escola de Futebol",
    "Escola de Natação",
    "Escola de Dança",
  ],
  Marketing: [
    "Agência de Marketing",
    "Agência Digital",
    "Social Media",
    "Tráfego Pago",
    "Branding",
    "Design Gráfico",
    "Produção de Vídeo",
    "Copywriting",
    "SEO",
  ],
};

function getPdvByBusinessBranch(branch) {
  const map = {
    Alimentação: "Mesas",
    "Beleza e Estética": "Agenda",
    Saúde: "Agenda",
    Educação: "Agenda",
    Esportes: "Agenda",
    Pet: "Agenda",
    Contabilidade: "OS",
    Jurídico: "OS",
    Logística: "OS",
    Transporte: "OS",
    "Construção Civil": "OS",
    "Limpeza e Conservação": "OS",
    "Recursos Humanos": "OS",
    "Serviços Gerais": "OS",
    Automotivo: "OS",
  };

  return map[String(branch || "").trim()] || "Balcao";
}

function normalizeAscii(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getSelectedSegment() {
  if (!projectBusinessBranch || !projectSegmentation) {
    return { branch: "", name: "", pdv: "" };
  }

  const selectedBranch = String(projectBusinessBranch.value || "").trim();
  const selectedOption =
    projectSegmentation.options[projectSegmentation.selectedIndex];
  const selectedName = String(projectSegmentation.value || "").trim();
  const selectedPdv = String(selectedOption?.dataset?.pdv || "").trim();

  if (selectedName === "Outro") {
    const custom = String(projectSegmentOther?.value || "").trim();
    return {
      branch: selectedBranch,
      name: custom || "Outro segmento",
      pdv: selectedPdv || getPdvByBusinessBranch(selectedBranch),
      isCustom: true,
    };
  }

  return {
    branch: selectedBranch,
    name: selectedName,
    pdv: selectedPdv || getPdvByBusinessBranch(selectedBranch),
    isCustom: false,
  };
}

function getSelectedGoals() {
  return projectGoalInputs
    .filter((input) => input.checked)
    .map((input) => String(input.value || "").trim())
    .filter(Boolean);
}

function getGoalLabels(goals) {
  return goals.map((goalKey) => goalMap[goalKey]?.label).filter(Boolean);
}

function buildGoalRecommendation(goals) {
  const goalDetails = goals.map((goalKey) => goalMap[goalKey]).filter(Boolean);

  if (!goalDetails.length) {
    return null;
  }

  const title =
    goalDetails.length === 1
      ? goalDetails[0].title
      : `${goalDetails[0].title} + ${goalDetails.length - 1} objetivo(s)`;

  const text = goalDetails
    .slice(0, 2)
    .map((detail) => detail.text)
    .join(" ");
  const tips = Array.from(
    new Set(goalDetails.flatMap((detail) => detail.tips).slice(0, 8)),
  ).slice(0, 6);

  return { title, text, tips };
}

function rankProjectTypes(goals, segmentName, pdv, selectedType) {
  const scoreMap = new Map(recommendationProjectTypes.map((type) => [type, 0]));

  const add = (type, points) => {
    scoreMap.set(type, (scoreMap.get(type) || 0) + points);
  };

  const selectedGoals = Array.isArray(goals)
    ? goals.filter(Boolean)
    : [goals].filter(Boolean);

  const normalizedSegment = normalizeAscii(segmentName);
  const normalizedPdv = normalizeAscii(pdv);

  selectedGoals.forEach((goal) => {
    if (goal === "vender-online") {
      add("E-commerce", 3);
      add("Marketplace", 2);
      add("Landing Page", 1);
    }

    if (goal === "captar-leads") {
      add("Landing Page", 3);
      add("Site Institucional", 2);
      add("Cartão Digital", 1);
    }

    if (goal === "autoridade") {
      add("Site Institucional", 3);
      add("Landing Page", 1);
      add("Cartão Digital", 1);
    }

    if (goal === "automatizar") {
      add("Sistema Web", 3);
      add("Plataforma SaaS", 2);
    }

    if (goal === "produto-digital") {
      add("Plataforma SaaS", 3);
      add("Sistema Web", 2);
      add("Landing Page", 1);
    }

    if (goal === "agendar-atendimentos") {
      add("Sistema Web", 2);
      add("Site Institucional", 2);
      add("Cartão Digital", 1);
    }

    if (goal === "suporte-cliente") {
      add("Sistema Web", 2);
      add("Site Institucional", 1);
      add("Cartão Digital", 1);
    }

    if (goal === "escalar-operacao") {
      add("Sistema Web", 3);
      add("Plataforma SaaS", 3);
      add("Marketplace", 1);
    }

    if (goal === "fidelizar-clientes") {
      add("E-commerce", 2);
      add("Plataforma SaaS", 2);
      add("Site Institucional", 1);
    }

    if (goal === "validar-oferta") {
      add("Landing Page", 3);
      add("Cartão Digital", 1);
      add("Site Institucional", 1);
    }
  });

  if (normalizedPdv.includes("agenda")) {
    add("Sistema Web", 2);
    add("Site Institucional", 1);
  }

  if (normalizedPdv.includes("os")) {
    add("Sistema Web", 2);
  }

  if (normalizedPdv.includes("mesas")) {
    add("Sistema Web", 1);
    add("Site Institucional", 1);
  }

  if (
    normalizedSegment.includes("delivery") ||
    normalizedSegment.includes("kitchen")
  ) {
    add("E-commerce", 2);
    add("Landing Page", 1);
  }

  if (
    normalizedSegment.includes("consult") ||
    normalizedSegment.includes("advoc") ||
    normalizedSegment.includes("contabil") ||
    normalizedSegment.includes("marketing") ||
    normalizedSegment.includes("imobili")
  ) {
    add("Site Institucional", 2);
    add("Landing Page", 1);
  }

  if (
    normalizedSegment.includes("escola") ||
    normalizedSegment.includes("cursos") ||
    normalizedSegment.includes("software")
  ) {
    add("Plataforma SaaS", 1);
    add("Sistema Web", 1);
  }

  if (selectedType) {
    add(selectedType, 0.4);
  }

  const ranking = Array.from(scoreMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([type, score]) => ({
      type,
      score: Number(score.toFixed(1)),
    }));

  return ranking;
}

function setAiSuggestionDecision(state) {
  if (!aiDecisionFeedback) {
    return;
  }

  if (state === "follow") {
    aiDecisionFeedback.textContent =
      "Escolha registrada: seguir com esse projeto. Vamos para os proximos passos.";
    return;
  }

  if (state === "switch") {
    aiDecisionFeedback.textContent =
      "Escolha registrada: avaliar outro projeto recomendado.";
    return;
  }

  aiDecisionFeedback.textContent = "Nenhuma acao selecionada ainda.";
}

function formatRankLevel(score) {
  if (!Number.isFinite(score)) {
    return "0";
  }

  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

function normalizeWhatsAppValue(value) {
  const raw = String(value || "");
  const digits = raw.replace(/\D/g, "");
  return digits || raw.trim();
}

function formatFieldAnswer(value, fallback = "Nao informado") {
  const clean = String(value || "").trim();
  return clean || fallback;
}

function getTopRankForMessage(selectedType = "") {
  const selectedGoals = getSelectedGoals();
  const selectedSegment = getSelectedSegment();
  const ranking = rankProjectTypes(
    selectedGoals,
    selectedSegment.name,
    selectedSegment.pdv,
    selectedType,
  );
  return ranking.slice(0, 3);
}

function getServiceValueInfo(serviceType) {
  const normalized = String(serviceType || "").trim();

  const valueMap = {
    "Mentoria PF": {
      label: "R$ 497,00 a vista ou ate 2x de R$ 248,50",
      source:
        "https://vilarinhofran-ui.github.io/Mentoria-Vilarinho-Tech/mentoria.index.html",
    },
    "LinkedIn Pro Visibility": {
      label: "Plano Essencial R$ 197 | Plano Pro R$ 497 (ou 2x de R$ 248,50)",
      source:
        "https://vilarinhofran-ui.github.io/Mentoria-Vilarinho-Tech/index.html",
    },
  };

  return valueMap[normalized] || null;
}

function buildWhatsappStructuredMessage(context = {}) {
  const requestedType = String(context.requestedType || "").trim();
  const selectedGoals = getSelectedGoals();
  const selectedGoalLabels = getGoalLabels(selectedGoals);
  const selectedSegment = getSelectedSegment();
  const selectedProjectType = String(projectType?.value || "").trim();
  const selectedInvestment = String(projectInvestmentRange?.value || "").trim();
  const ranking = Array.isArray(context.ranking)
    ? context.ranking
    : getTopRankForMessage(selectedProjectType || requestedType);
  const serviceValueInfo =
    context.serviceValueInfo ||
    getServiceValueInfo(requestedType || selectedProjectType);

  const formName = formatFieldAnswer(clientName?.value || "");
  const formWhatsapp = formatFieldAnswer(
    normalizeWhatsAppValue(clientWhatsapp?.value || ""),
  );
  const formEmail = formatFieldAnswer(clientEmail?.value || "");

  const finalType =
    requestedType ||
    selectedProjectType ||
    String(aiFollowProjectButton?.dataset?.suggestedType || "").trim() ||
    "Projeto personalizado";
  const resumoSolicitacao = `Olá Vilarinho Tech! Quero mais informações sobre tipo de projeto ${finalType}. Sou ${formName} (${formWhatsapp}).`;

  const recommendedTypes = formatFieldAnswer(
    ranking
      .slice(0, 3)
      .map((item) => item.type)
      .join(", "),
    "Nao recomendado",
  );

  return [
    resumoSolicitacao,
    "",
    "*FORMULARIO - RECOMENDADOR*",
    `*Nome:* ${formName}`,
    `*WhatsApp:* ${formWhatsapp}`,
    `*E-mail:* ${formEmail}`,
    `*Ramo da empresa:* ${formatFieldAnswer(selectedSegment.branch, "Nao selecionado")}`,
    `*Segmentacao:* ${formatFieldAnswer(selectedSegment.name, "Nao selecionado")}`,
    `*PDV:* ${formatFieldAnswer(selectedSegment.pdv, "Nao identificado")}`,
    `*Objetivos:* ${formatFieldAnswer(selectedGoalLabels.join(", "), "Nao selecionado")}`,
    `*Faixa de investimento:* ${formatFieldAnswer(selectedInvestment, "Ainda estou avaliando")}`,
    `*Valor do servico:* ${serviceValueInfo?.label || "Sob consulta"}`,
    `*Tipo de projetos recomendados:* ${recommendedTypes}`,
    `*Tipo de projeto escolhido:* ${formatFieldAnswer(selectedProjectType || finalType, "Nao selecionado")}`,
  ].join("\n");
}

function openWhatsappWithMessage(messageText) {
  const encodedMessage = encodeURIComponent(messageText);
  const url = `https://wa.me/5541991443794?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function setExternalConnectStatus(message) {
  if (externalConnectStatus) {
    externalConnectStatus.textContent = message;
  }
}

function setAdminAccess(enabled) {
  isAuthorizedAdmin = enabled;

  document.body.classList.toggle("admin-authenticated", Boolean(enabled));

  if (adminProjectFields) {
    adminProjectFields.hidden = !enabled;
  }
}

function hasAdminSession() {
  return sessionStorage.getItem(adminSessionKey) === "1";
}

function setAdminSession(enabled) {
  if (enabled) {
    sessionStorage.setItem(adminSessionKey, "1");
    return;
  }

  sessionStorage.removeItem(adminSessionKey);
}

function setAdminLoginFeedback(message) {
  if (adminLoginFeedback) {
    adminLoginFeedback.textContent = message;
  }
}

function getAdminCredentials() {
  const fallback = {
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD,
  };

  const raw = localStorage.getItem(adminCredentialsKey);
  if (!raw) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(raw);
    const username = String(parsed?.username || "").trim();
    const password = String(parsed?.password || "").trim();

    if (!username || !password) {
      return fallback;
    }

    // Silent migration from legacy default password to the current one.
    if (
      (LEGACY_ADMIN_USERNAMES.includes(username.toLowerCase()) &&
        (LEGACY_ADMIN_PASSWORDS.includes(password) ||
          password === ADMIN_PASSWORD)) ||
      (username.toLowerCase() === ADMIN_USERNAME.toLowerCase() &&
        LEGACY_ADMIN_PASSWORDS.includes(password))
    ) {
      saveAdminCredentials(ADMIN_USERNAME, ADMIN_PASSWORD);
      return fallback;
    }

    return { username, password };
  } catch {
    return fallback;
  }
}

function saveAdminCredentials(username, password) {
  localStorage.setItem(
    adminCredentialsKey,
    JSON.stringify({
      username: String(username || "").trim(),
      password: String(password || "").trim(),
    }),
  );
}

function setAdminManagerFeedback(message) {
  if (adminManagerFeedback) {
    adminManagerFeedback.textContent = message;
  }
}

function openAdminLogin() {
  if (adminSection) {
    adminSection.hidden = true;
  }

  if (!adminLoginSection) {
    return;
  }

  adminLoginSection.hidden = false;
  adminLoginSection.classList.add("visible");
  window.location.hash = "admin-login";
  adminLoginSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openAdminPanel() {
  if (!adminSection) {
    return;
  }

  // Defensive sync: ensure the project form is visible whenever admin panel is opened.
  setAdminAccess(true);

  if (adminLoginSection) {
    adminLoginSection.hidden = true;
  }

  adminSection.hidden = false;
  adminSection.classList.add("visible");
  window.location.hash = "admin";
  adminSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openExternalPlatformLogin(provider) {
  const targets = {
    github: "https://github.com/login",
    netlify: "https://app.netlify.com/login",
  };

  const url = targets[provider];
  if (!url) {
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");

  const label = provider === "github" ? "GitHub" : "Netlify";
  setExternalConnectStatus(
    `${label} aberto. Depois cole a URL do projeto e clique em "Sincronizar e Publicar no Site".`,
  );
}

function setSyncFeedback(message) {
  if (syncUrlsFeedback) {
    syncUrlsFeedback.textContent = message;
  }
}

function setSupabaseStatus(message) {
  if (supabaseStatus) {
    supabaseStatus.textContent = message;
  }
}

function getSupabaseConfig() {
  try {
    const raw = localStorage.getItem(supabaseConfigKey);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    const url = String(parsed?.url || "").trim();
    const anonKey = String(parsed?.anonKey || "").trim();
    const table = String(parsed?.table || "portfolio_projects").trim();
    const bucket = String(parsed?.bucket || "portfolio-covers").trim();
    if (!url || !anonKey) {
      return null;
    }

    return { url, anonKey, table, bucket };
  } catch {
    return null;
  }
}

function saveSupabaseConfig(config) {
  localStorage.setItem(supabaseConfigKey, JSON.stringify(config));
}

function clearSupabaseConfig() {
  localStorage.removeItem(supabaseConfigKey);
}

function getSupabaseClient() {
  const config = getSupabaseConfig();
  if (!config) {
    return null;
  }

  if (!window.supabase?.createClient) {
    return null;
  }

  if (
    supabaseClient &&
    supabaseClient.__vtsUrl === config.url &&
    supabaseClient.__vtsAnonKey === config.anonKey
  ) {
    return supabaseClient;
  }

  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  supabaseClient.__vtsUrl = config.url;
  supabaseClient.__vtsAnonKey = config.anonKey;
  return supabaseClient;
}

function mapProjectToSupabasePayload(project) {
  const normalizedProject = {
    ...project,
    coverUrl: getProjectCoverUrl(project),
    order: getProjectOrder(project),
  };
  const key = projectFingerprint(normalizedProject);

  return {
    fingerprint_key: key,
    name: String(normalizedProject.name || "").trim(),
    type: String(normalizedProject.type || "").trim(),
    branch: String(normalizedProject.branch || "").trim(),
    segmentation: String(normalizedProject.segmentation || "").trim(),
    commercial_focus: String(normalizedProject.commercial_focus || "").trim(),
    description: String(normalizedProject.description || "").trim(),
    url: normalizeUrl(String(normalizedProject.url || "")),
    cover_url: String(normalizedProject.coverUrl || "").trim(),
    sort_order: Number.isFinite(Number(normalizedProject.order))
      ? Number(normalizedProject.order)
      : null,
    is_published: normalizedProject.is_published !== false,
    updated_at: new Date().toISOString(),
  };
}

function mapSupabaseRowToProject(row) {
  if (!row || typeof row !== "object") {
    return null;
  }

  const name = String(row.name || "").trim();
  const type = String(row.type || "").trim();
  const description = String(row.description || "").trim();

  if (!name || !type || !description) {
    return null;
  }

  return {
    name,
    type,
    branch: String(row.branch || "").trim(),
    segmentation: String(row.segmentation || "").trim(),
    commercial_focus: String(row.commercial_focus || "").trim(),
    description,
    url: normalizeUrl(String(row.url || "")),
    is_published: row.is_published !== false,
    coverUrl: String(row.cover_url || "").trim(),
    order: Number.isFinite(Number(row.sort_order))
      ? Number(row.sort_order)
      : null,
  };
}

async function syncProjectToSupabase(project) {
  const client = getSupabaseClient();
  const config = getSupabaseConfig();
  if (!client || !config) {
    return { ok: false, skipped: true };
  }

  const payload = mapProjectToSupabasePayload(project);
  if (!payload.fingerprint_key) {
    return { ok: false, skipped: true };
  }

  const existing = await client
    .from(config.table)
    .select("id")
    .eq("fingerprint_key", payload.fingerprint_key)
    .maybeSingle();

  if (existing.error && existing.error.code !== "PGRST116") {
    throw new Error(existing.error.message || "Falha ao consultar projeto.");
  }

  if (existing.data?.id) {
    const updateResult = await client
      .from(config.table)
      .update(payload)
      .eq("id", existing.data.id);

    if (updateResult.error) {
      throw new Error(
        updateResult.error.message || "Falha ao atualizar projeto.",
      );
    }
    return { ok: true };
  }

  const insertResult = await client.from(config.table).insert(payload);
  if (insertResult.error) {
    throw new Error(insertResult.error.message || "Falha ao inserir projeto.");
  }
  return { ok: true };
}

async function deleteProjectFromSupabase(project) {
  const client = getSupabaseClient();
  const config = getSupabaseConfig();
  if (!client || !config) {
    return;
  }

  const key = projectFingerprint(project);
  if (!key) {
    return;
  }

  const deletion = await client
    .from(config.table)
    .delete()
    .eq("fingerprint_key", key);

  if (deletion.error) {
    throw new Error(deletion.error.message || "Falha ao excluir projeto.");
  }
}

async function syncLocalProjectsToSupabase() {
  const client = getSupabaseClient();
  const config = getSupabaseConfig();
  if (!client || !config) {
    return { synced: 0, skipped: true };
  }

  const projects = attachStoredOrder(attachStoredCovers(getStoredProjects()));
  let synced = 0;

  for (const project of projects) {
    await syncProjectToSupabase(project);
    synced += 1;
  }

  return { synced };
}

function applyRemoteProjectsLocally(projects) {
  const mapped = dedupeProjects(projects.filter(Boolean));
  const covers = getStoredProjectCovers();
  const orders = getStoredProjectOrders();

  mapped.forEach((project) => {
    const key = projectFingerprint(project);
    if (!key) {
      return;
    }

    if (project.coverUrl) {
      covers[key] = project.coverUrl;
    }

    if (Number.isFinite(Number(project.order)) && Number(project.order) > 0) {
      orders[key] = Number(project.order);
    }
  });

  saveProjects(
    mapped.map((project) => {
      const clone = { ...project };
      delete clone.order;
      delete clone.coverUrl;
      return clone;
    }),
  );
  saveStoredProjectCovers(covers);
  saveStoredProjectOrders(orders);
}

async function pullProjectsFromSupabase() {
  const client = getSupabaseClient();
  const config = getSupabaseConfig();
  if (!client || !config) {
    return { pulled: 0, skipped: true };
  }

  const result = await client
    .from(config.table)
    .select("*")
    .order("sort_order", { ascending: true, nullsFirst: false })
    .order("updated_at", { ascending: false });

  if (result.error) {
    throw new Error(
      result.error.message || "Falha ao carregar projetos remotos.",
    );
  }

  const projects = (result.data || [])
    .map((row) => mapSupabaseRowToProject(row))
    .filter(Boolean);

  applyRemoteProjectsLocally(projects);
  return { pulled: projects.length };
}

async function uploadCoverToSupabase(file) {
  const client = getSupabaseClient();
  const config = getSupabaseConfig();
  if (!client || !config) {
    return null;
  }

  const extension =
    String(file.name || "image")
      .split(".")
      .pop() || "jpg";
  const path = `covers/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;

  const upload = await client.storage
    .from(config.bucket)
    .upload(path, file, { cacheControl: "3600", upsert: true });

  if (upload.error) {
    throw new Error(upload.error.message || "Falha no upload da capa.");
  }

  const publicResult = client.storage.from(config.bucket).getPublicUrl(path);
  return String(publicResult.data?.publicUrl || "").trim() || null;
}

async function setupSupabaseRealtime() {
  const client = getSupabaseClient();
  const config = getSupabaseConfig();
  if (!client || !config) {
    return;
  }

  if (supabaseRealtimeChannel) {
    await client.removeChannel(supabaseRealtimeChannel);
    supabaseRealtimeChannel = null;
  }

  supabaseRealtimeChannel = client
    .channel(`vts-portfolio-${config.table}`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: config.table },
      async () => {
        try {
          await pullProjectsFromSupabase();
          await renderPortfolio();
          renderAdminProjectManager();
          setSupabaseStatus("Atualizacao remota recebida em tempo real.");
        } catch (error) {
          setSupabaseStatus(
            `Falha ao atualizar em tempo real: ${error?.message || "erro"}`,
          );
        }
      },
    )
    .subscribe();
}

function getStoredProjects() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveProjects(projects) {
  localStorage.setItem(storageKey, JSON.stringify(projects));
}

function getStoredProjectCovers() {
  const raw = localStorage.getItem(projectCoversKey);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveStoredProjectCovers(map) {
  localStorage.setItem(projectCoversKey, JSON.stringify(map));
}

function getStoredProjectOrders() {
  const raw = localStorage.getItem(projectOrdersKey);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveStoredProjectOrders(map) {
  localStorage.setItem(projectOrdersKey, JSON.stringify(map));
}

function buildAutoCoverFromUrl(url) {
  const normalized = normalizeUrl(url || "");
  if (!normalized) {
    return "assets/logo_.jpg";
  }

  const encodedUrl = encodeURIComponent(normalized);
  return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&hide=a%5Bhref*%3D%22lovable.dev%22%5D%2C%20%5Bclass*%3D%22lovable%22%5D%2C%20%23lovable-badge%2C%20%5Bdata-lovable%5D%2C%20a%5Bhref*%3D%22lovable%22%5D%2C%20div%5Bid*%3D%22lovable%22%5D%2C%20%5Bclass*%3D%22gpt-engineer%22%5D&scroll=0&waitForTimeout=3000`;
}

function normalizeUrl(url) {
  if (!url) {
    return "";
  }

  try {
    const parsed = new URL(url.trim());
    parsed.hash = "";
    const normalized = parsed.toString().replace(/\/$/, "");
    return normalized.toLowerCase();
  } catch {
    return url.trim().toLowerCase().replace(/\/$/, "");
  }
}

function isHttpUrl(url) {
  try {
    const parsed = new URL(String(url || "").trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function projectFingerprint(project) {
  const normalizedUrl = normalizeUrl(project.url || "");
  if (normalizedUrl) {
    return `url:${normalizedUrl}`;
  }

  const name = String(project.name || "")
    .trim()
    .toLowerCase();
  const type = String(project.type || "")
    .trim()
    .toLowerCase();
  return `name:${name}|type:${type}`;
}

function getProjectCoverUrl(project) {
  const explicitCover = String(
    project.coverUrl || project.cover_url || "",
  ).trim();
  if (explicitCover) {
    return explicitCover;
  }

  return buildAutoCoverFromUrl(project.url || "");
}

function attachStoredCovers(projects) {
  const coverMap = getStoredProjectCovers();
  return projects.map((project) => {
    const key = projectFingerprint(project);
    const mappedCover = String(coverMap[key] || "").trim();
    if (!mappedCover) {
      return project;
    }

    return {
      ...project,
      coverUrl: mappedCover,
    };
  });
}

function attachStoredOrder(projects) {
  return projects.map((project) => {
    const order = getProjectOrder(project);
    return {
      ...project,
      order: Number.isFinite(order) ? order : null,
    };
  });
}

function saveProjectCover(project, coverUrl) {
  const trimmed = String(coverUrl || "").trim();
  if (!trimmed) {
    return;
  }

  const key = projectFingerprint(project);
  if (!key) {
    return;
  }

  const current = getStoredProjectCovers();
  current[key] = trimmed;
  saveStoredProjectCovers(current);
}

function getProjectOrder(project) {
  const orderMap = getStoredProjectOrders();
  const key = projectFingerprint(project);
  const value = Number(orderMap[key]);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function saveProjectOrder(project, orderValue) {
  const value = Number(orderValue);
  if (!Number.isFinite(value) || value <= 0) {
    return;
  }

  const key = projectFingerprint(project);
  if (!key) {
    return;
  }

  const current = getStoredProjectOrders();
  current[key] = Math.round(value);
  saveStoredProjectOrders(current);
}

function dedupeProjects(projects) {
  const seen = new Set();
  const unique = [];

  projects.forEach((project) => {
    const key = projectFingerprint(project);
    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    unique.push(project);
  });

  return unique;
}

function syncExposedProjectsToAdminPanel() {
  const stored = getStoredProjects();
  const exposedProjects = defaultProjects.map((project) => ({
    ...project,
    is_published: true,
  }));
  const merged = dedupeProjects([...stored, ...exposedProjects]);

  if (merged.length !== stored.length) {
    saveProjects(merged);
  }
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getPublishedProjects(projects) {
  return projects.filter((project) => project.is_published !== false);
}

function findStoredProjectIndexByKey(projectKey) {
  const projects = getStoredProjects();
  return projects.findIndex(
    (project) => projectFingerprint(project) === projectKey,
  );
}

function setProjectEditorMode(isEditing) {
  const submitButtons = Array.from(
    adminProjectForm?.querySelectorAll("button[data-submit-mode]") || [],
  );

  submitButtons.forEach((button) => {
    const mode = String(button.dataset.submitMode || "");
    if (mode === "save-publish") {
      button.textContent = isEditing
        ? "Atualizar e Publicar"
        : "Salvar e Publicar";
    }
  });
}

function loadProjectInEditor(projectKey) {
  const projects = getStoredProjects();
  const project = projects.find(
    (item) => projectFingerprint(item) === projectKey,
  );

  if (!project) {
    setAdminManagerFeedback("Projeto nao encontrado para edicao.");
    return;
  }

  editingProjectKey = projectKey;
  adminName.value = String(project.name || "");
  adminType.value = String(project.type || "");
  adminDescription.value = String(project.description || "");
  adminUrl.value = String(project.url || "");
  if (adminBusinessBranch) {
    adminBusinessBranch.value = String(project.branch || "");
  }
  syncAdminSegmentationState?.();
  if (adminSegmentation) {
    const storedSegmentation = String(project.segmentation || "").trim();
    if (storedSegmentation) {
      const hasMappedOption = Array.from(adminSegmentation.options).some(
        (option) => option.value === storedSegmentation,
      );
      if (hasMappedOption) {
        adminSegmentation.value = storedSegmentation;
      } else {
        adminSegmentation.value = "Outro";
        if (adminSegmentationOther) {
          adminSegmentationOther.value = storedSegmentation;
        }
      }
    }
  }
  if (adminCommercialFocus) {
    adminCommercialFocus.value = String(project.commercial_focus || "");
  }
  syncAdminSegmentationState?.();
  const order = getProjectOrder(project);
  adminOrder.value = order ? String(order) : "";
  if (adminStatus) {
    adminStatus.value = project.is_published === false ? "draft" : "published";
  }
  const storedCover = getProjectCoverUrl(project);
  selectedCustomCoverDataUrl = storedCover;
  isManualCoverSelection = Boolean(
    storedCover && storedCover !== buildAutoCoverFromUrl(project.url || ""),
  );
  if (adminCoverPreview) {
    adminCoverPreview.src = storedCover;
  }
  if (adminCoverUpload) {
    adminCoverUpload.value = "";
  }
  setProjectEditorMode(true);
  adminFeedback.textContent = "Edicao carregada. Atualize e salve o projeto.";
}

function renderAdminProjectManager() {
  if (!adminProjectManager) {
    return;
  }

  const projects = getStoredProjects();
  if (!projects.length) {
    adminProjectManager.innerHTML =
      "<p>Nenhum projeto cadastrado ainda. Use o formulario para adicionar.</p>";
    return;
  }

  const sorted = prepareProjectListForDisplay(attachStoredOrder(projects));

  adminProjectManager.innerHTML = sorted
    .map((project) => {
      const key = projectFingerprint(project);
      const isActive = project.is_published !== false;
      const statusClass = isActive ? "is-active" : "is-inactive";
      const statusLabel = isActive ? "Ativo" : "Inativo";
      const businessContext = [
        String(project.branch || "").trim(),
        String(project.segmentation || "").trim(),
      ]
        .filter(Boolean)
        .join(" • ");
      const displayOrder = Number(project.order);
      const orderValue =
        Number.isFinite(displayOrder) && displayOrder > 0
          ? String(Math.round(displayOrder))
          : "";

      return `
        <article class="admin-project-item">
          <div class="admin-project-item-head">
            <strong>${escapeHtml(project.name || "Projeto sem nome")}</strong>
            <span class="admin-project-status ${statusClass}">${statusLabel}</span>
          </div>
          <p>${escapeHtml(project.type || "Sem tipo")}</p>
          <p>${escapeHtml(businessContext || "Sem ramo e segmentacao")}</p>
          <p>${escapeHtml(project.url || "Sem URL")}</p>
          <div class="admin-project-inline-controls">
            <label>
              Ordem
              <input type="number" min="1" step="1" value="${orderValue}" data-field="order" />
            </label>
            <button type="button" class="btn btn-ghost btn-sm" data-action="update-order" data-key="${escapeHtml(key)}">Atualizar Ordem</button>
            <label>
              Status
              <select data-field="status">
                <option value="published" ${isActive ? "selected" : ""}>Publicado</option>
                <option value="draft" ${!isActive ? "selected" : ""}>Rascunho</option>
              </select>
            </label>
            <button type="button" class="btn btn-ghost btn-sm" data-action="update-status" data-key="${escapeHtml(key)}">Atualizar Status</button>
          </div>
          <div class="admin-project-actions">
            <button type="button" class="btn btn-ghost btn-sm" data-action="edit" data-key="${escapeHtml(key)}">Editar</button>
            <button type="button" class="btn btn-ghost btn-sm" data-action="publish" data-key="${escapeHtml(key)}">Publicar</button>
            <button type="button" class="btn btn-ghost btn-sm" data-action="toggle" data-key="${escapeHtml(key)}">${
              isActive ? "Desativar" : "Ativar"
            }</button>
            <button type="button" class="btn btn-ghost btn-sm" data-action="delete" data-key="${escapeHtml(key)}">Excluir</button>
          </div>
        </article>
      `;
    })
    .join("");
}

async function handleAdminManagerAction(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const action = target.getAttribute("data-action");
  const projectKey = target.getAttribute("data-key");
  if (!action || !projectKey) {
    return;
  }

  if (!isAuthorizedAdmin) {
    setAdminManagerFeedback(
      "Acesso admin bloqueado. Faça login para continuar.",
    );
    return;
  }

  const projects = getStoredProjects();
  const index = projects.findIndex(
    (project) => projectFingerprint(project) === projectKey,
  );

  if (index < 0) {
    setAdminManagerFeedback("Projeto nao encontrado.");
    return;
  }

  if (action === "edit") {
    loadProjectInEditor(projectKey);
    return;
  }

  if (action === "toggle") {
    const current = projects[index];
    current.is_published = current.is_published === false;
    saveProjects(projects);
    try {
      await syncProjectToSupabase({
        ...current,
        order: getProjectOrder(current),
      });
    } catch (error) {
      setSupabaseStatus(
        `Alteracao local aplicada. Falha no sync Supabase: ${error?.message || "erro"}`,
      );
    }
    await renderPortfolio();
    renderAdminProjectManager();
    const statusText = current.is_published ? "ativado" : "desativado";
    setAdminManagerFeedback(`Projeto ${statusText} com sucesso.`);
    return;
  }

  if (action === "publish") {
    const current = projects[index];
    current.is_published = true;
    saveProjects(projects);
    try {
      await syncProjectToSupabase({
        ...current,
        order: getProjectOrder(current),
      });
    } catch (error) {
      setSupabaseStatus(
        `Publicacao local aplicada. Falha no sync Supabase: ${error?.message || "erro"}`,
      );
    }
    await renderPortfolio();
    renderAdminProjectManager();
    setAdminManagerFeedback("Projeto publicado com sucesso.");
    return;
  }

  if (action === "update-order") {
    const card = target.closest(".admin-project-item");
    const orderInput = card?.querySelector('input[data-field="order"]');
    const newOrder = Number(orderInput?.value || "");

    if (!Number.isFinite(newOrder) || newOrder <= 0) {
      setAdminManagerFeedback("Informe uma ordem valida maior que zero.");
      return;
    }

    const current = projects[index];
    saveProjectOrder(current, newOrder);
    try {
      await syncProjectToSupabase({
        ...current,
        order: newOrder,
        coverUrl: getProjectCoverUrl(current),
      });
    } catch (error) {
      setSupabaseStatus(
        `Ordem salva localmente. Falha no sync Supabase: ${error?.message || "erro"}`,
      );
    }
    await renderPortfolio();
    renderAdminProjectManager();
    setAdminManagerFeedback("Ordem do projeto atualizada.");
    return;
  }

  if (action === "update-status") {
    const card = target.closest(".admin-project-item");
    const statusSelect = card?.querySelector('select[data-field="status"]');
    const statusValue = String(statusSelect?.value || "published");
    const current = projects[index];
    current.is_published = statusValue !== "draft";
    saveProjects(projects);
    try {
      await syncProjectToSupabase({
        ...current,
        order: getProjectOrder(current),
      });
    } catch (error) {
      setSupabaseStatus(
        `Status salvo localmente. Falha no sync Supabase: ${error?.message || "erro"}`,
      );
    }
    await renderPortfolio();
    renderAdminProjectManager();
    setAdminManagerFeedback("Status do projeto atualizado.");
    return;
  }

  if (action === "delete") {
    const confirmed = window.confirm(
      "Deseja excluir este projeto do portfolio?",
    );
    if (!confirmed) {
      return;
    }

    const [removed] = projects.splice(index, 1);
    saveProjects(projects);
    try {
      await deleteProjectFromSupabase(removed);
    } catch (error) {
      setSupabaseStatus(
        `Projeto removido localmente. Falha no sync Supabase: ${error?.message || "erro"}`,
      );
    }
    await renderPortfolio();
    renderAdminProjectManager();

    if (editingProjectKey === projectKey) {
      editingProjectKey = null;
      setProjectEditorMode(false);
      resetAdminProjectEditor();
    }

    setAdminManagerFeedback(
      `Projeto "${removed?.name || "Sem nome"}" excluido com sucesso.`,
    );
  }
}

async function handleAdminLoginTrigger(event) {
  event.preventDefault();

  if (!hasAdminSession()) {
    setAdminAccess(false);
    setAdminLoginFeedback("Entre com usuario e senha para acessar o admin.");
    openAdminLogin();
    return;
  }

  openAdminPanel();
  setAdminAccess(true);
}

function handleAdminCredentialLogin(event) {
  event.preventDefault();

  const username = String(adminLoginUser?.value || "").trim();
  const password = String(adminLoginPassword?.value || "").trim();
  const credentials = getAdminCredentials();
  const normalizedUsername = username.toLowerCase();

  const isMasterCredentialPair =
    normalizedUsername === ADMIN_USERNAME.toLowerCase() &&
    password === ADMIN_PASSWORD;

  const isValid =
    isMasterCredentialPair ||
    (normalizedUsername === credentials.username.toLowerCase() &&
      password === credentials.password);

  if (!isValid) {
    setAdminSession(false);
    setAdminAccess(false);
    setAdminLoginFeedback("Usuario ou senha invalidos.");
    return;
  }

  if (isMasterCredentialPair) {
    saveAdminCredentials(ADMIN_USERNAME, ADMIN_PASSWORD);
  }

  setAdminSession(true);
  setAdminAccess(true);
  setAdminLoginFeedback("Login realizado com sucesso.");

  if (adminLoginForm) {
    adminLoginForm.reset();
  }

  openAdminPanel();
}

function handleForgotPassword() {
  const informedEmail = window.prompt(
    "Confirme o email master para redefinir a senha:",
  );

  if (!informedEmail) {
    setAdminLoginFeedback("Recuperacao cancelada.");
    return;
  }

  const normalizedEmail = informedEmail.trim().toLowerCase();
  if (normalizedEmail !== MASTER_ADMIN_EMAIL) {
    setAdminLoginFeedback("Email nao autorizado para redefinicao de senha.");
    return;
  }

  const newPassword = window.prompt("Digite a nova senha do admin:");
  if (!newPassword) {
    setAdminLoginFeedback("Nova senha nao informada.");
    return;
  }

  const normalizedPassword = newPassword.trim();
  if (normalizedPassword.length < 6) {
    setAdminLoginFeedback("A nova senha deve ter pelo menos 6 caracteres.");
    return;
  }

  const current = getAdminCredentials();
  saveAdminCredentials(current.username, normalizedPassword);
  setAdminLoginFeedback("Senha redefinida com sucesso. Faça login novamente.");
}

function handleGoogleAdminContinue() {
  const googleUrl = `https://accounts.google.com/AccountChooser?Email=${encodeURIComponent(MASTER_ADMIN_EMAIL)}`;
  window.open(googleUrl, "_blank", "noopener,noreferrer");

  const informedEmail = window.prompt(
    "Após entrar no Google, confirme o email admin para liberar o painel:",
  );

  if (!informedEmail) {
    setAdminLoginFeedback("Validacao cancelada.");
    return;
  }

  const normalized = informedEmail.trim().toLowerCase();
  if (normalized !== MASTER_ADMIN_EMAIL) {
    setAdminSession(false);
    setAdminAccess(false);
    setAdminLoginFeedback("Acesso negado. Somente o admin master pode entrar.");
    return;
  }

  setAdminSession(true);
  setAdminAccess(true);
  setAdminLoginFeedback("Acesso liberado com Google para admin master.");
  openAdminPanel();
}

function logoutAdminPanel() {
  setAdminSession(false);
  setAdminAccess(false);
  editingProjectKey = null;
  setProjectEditorMode(false);
  setAdminLoginFeedback("Sessao encerrada. Faça login novamente.");
  openAdminLogin();
}

function inferProjectTypeFromUrl(urlString) {
  const lower = urlString.toLowerCase();

  if (lower.includes("market") || lower.includes("multi-vendor")) {
    return "Marketplace";
  }

  if (
    lower.includes("dashboard") ||
    lower.includes("sistema") ||
    lower.includes("app") ||
    lower.includes("saas")
  ) {
    return lower.includes("saas") ? "Plataforma SaaS" : "Sistema Web";
  }

  if (
    lower.includes("shop") ||
    lower.includes("store") ||
    lower.includes("ecom") ||
    lower.includes("loja")
  ) {
    return "E-commerce";
  }

  if (lower.includes("landing") || lower.includes("lp")) {
    return "Landing Page";
  }

  if (lower.includes("card") || lower.includes("cartao")) {
    return "Cartao Digital";
  }

  if (
    lower.includes("netlify") ||
    lower.includes("github.io") ||
    lower.includes("lovable")
  ) {
    return "Site Institucional";
  }

  return "Site Institucional";
}

function inferProjectNameFromUrl(urlString) {
  try {
    const parsed = new URL(urlString);
    const host = parsed.hostname.replace(/^www\./, "");
    const base = host.split(".")[0] || "Projeto";
    return base.charAt(0).toUpperCase() + base.slice(1);
  } catch {
    return "Projeto";
  }
}

function buildProjectFromUrl(urlString) {
  const normalized = normalizeUrl(urlString);
  const name = inferProjectNameFromUrl(urlString);
  const type = inferProjectTypeFromUrl(normalized);
  const branch = inferBusinessBranchFromType(type);
  const segmentation = inferSegmentationFromType(type);

  return {
    name,
    type,
    branch,
    segmentation,
    commercial_focus:
      "gerar oportunidades comerciais com posicionamento digital",
    description: buildDescriptionFromType(type),
    url: normalized,
    is_published: true,
  };
}

function inferBusinessBranchFromType(type) {
  const normalized = String(type || "").trim();
  const map = {
    "Cartao Digital": "Comércio",
    "Landing Page": "Comércio",
    "Site Institucional": "Comércio",
    "E-commerce": "Comércio",
    "Sistema Web": "Tecnologia da Informação",
    "Plataforma SaaS": "Tecnologia da Informação",
    Marketplace: "Comércio",
  };

  return map[normalized] || "Tecnologia da Informação";
}

function inferSegmentationFromType(type) {
  const normalized = String(type || "").trim();
  const map = {
    "Cartao Digital": "Agência Digital",
    "Landing Page": "Agência Digital",
    "Site Institucional": "Agência Digital",
    "E-commerce": "Loja de Roupas",
    "Sistema Web": "Software House",
    "Plataforma SaaS": "SaaS",
    Marketplace: "E-commerce / Varejo",
  };

  return map[normalized] || "Outro";
}

function buildDescriptionFromType(type) {
  const map = {
    "Cartao Digital": "Entrega contato rapido e presenca online basica.",
    "Cartão Digital": "Entrega contato rapido e presenca online basica.",
    "Landing Page": "Entrega geracao de leads para campanhas e anuncios.",
    "Site Institucional": "Entrega autoridade da marca e captacao organica.",
    "E-commerce": "Entrega vendas online com gestao de produtos e pedidos.",
    "Sistema Web": "Entrega organizacao interna e produtividade da equipe.",
    "Plataforma SaaS": "Entrega produto digital com recorrencia e escala.",
    Marketplace: "Entrega ecossistema de vendedores em uma plataforma unica.",
  };

  return map[type] || "Projeto digital publicado no portfolio.";
}

function buildPortfolioPreview(project) {
  const parts = [
    String(project.type || "").trim(),
    String(project.branch || "").trim(),
    String(project.segmentation || "").trim(),
  ].filter(Boolean);

  if (!parts.length) {
    return "Projeto digital publicado";
  }

  if (parts.length === 1) {
    return parts[0];
  }

  return `${parts[0]} • ${parts[1]}${parts[2] ? ` • ${parts[2]}` : ""}`;
}

function inferDomainFromUrl(urlString) {
  try {
    const parsed = new URL(urlString);
    return parsed.hostname.replace(/^www\./i, "");
  } catch {
    return "canal digital do cliente";
  }
}

function getAdminSegmentationValue() {
  const selected = String(adminSegmentation?.value || "").trim();
  if (selected === "Outro") {
    return String(adminSegmentationOther?.value || "").trim();
  }
  return selected;
}

function buildCommercialDescriptionFromAdminInput() {
  const name = String(adminName?.value || "").trim() || "Projeto";
  const type = String(adminType?.value || "").trim() || "solucao digital";
  const branch = String(adminBusinessBranch?.value || "").trim();
  const segmentation = getAdminSegmentationValue();
  const focus = String(adminCommercialFocus?.value || "").trim();
  const url = normalizeUrl(String(adminUrl?.value || "").trim());
  const domain = url ? inferDomainFromUrl(url) : "canal digital oficial";

  const contextChunks = [
    branch ? `no ramo de ${branch.toLowerCase()}` : "",
    segmentation ? `na segmentacao ${segmentation.toLowerCase()}` : "",
  ].filter(Boolean);

  const contextLabel = contextChunks.length
    ? contextChunks.join(" ")
    : "com posicionamento comercial definido";
  const focusLabel =
    focus ||
    "fortalecer autoridade, aumentar conversao e acelerar geracao de oportunidades";

  return `${type} para ${name}, ${contextLabel}. Solucao pensada para ${focusLabel}, com experiencia objetiva, comunicacao clara de valor e CTA estrategico para transformar visitas em contatos qualificados. Referencia digital: ${domain}.`;
}

function fillProjectFieldsFromUrl() {
  const rawUrl = String(adminUrl?.value || "").trim();
  if (!rawUrl) {
    adminFeedback.textContent =
      "Informe uma URL do projeto para preencher automaticamente.";
    return;
  }

  const normalizedUrl = normalizeUrl(rawUrl);
  const inferredType = inferProjectTypeFromUrl(normalizedUrl);
  const inferredName = inferProjectNameFromUrl(rawUrl);

  if (adminName && !adminName.value.trim()) {
    adminName.value = inferredName;
  }

  if (adminType && !adminType.value.trim()) {
    adminType.value = inferredType;
  }

  if (adminBusinessBranch && !adminBusinessBranch.value.trim()) {
    adminBusinessBranch.value = inferBusinessBranchFromType(
      adminType?.value || inferredType,
    );
    syncAdminSegmentationState?.();
  }

  if (adminSegmentation && !adminSegmentation.value.trim()) {
    const inferredSegmentation = inferSegmentationFromType(
      adminType?.value || inferredType,
    );
    const hasMappedOption = Array.from(adminSegmentation.options).some(
      (option) => option.value === inferredSegmentation,
    );

    if (hasMappedOption) {
      adminSegmentation.value = inferredSegmentation;
    } else {
      adminSegmentation.value = "Outro";
      if (adminSegmentationOther && inferredSegmentation !== "Outro") {
        adminSegmentationOther.value = inferredSegmentation;
      }
    }
  }

  if (adminCommercialFocus && !adminCommercialFocus.value.trim()) {
    adminCommercialFocus.value =
      "aumentar conversao, captar leads e fortalecer autoridade";
  }

  if (adminDescription && !adminDescription.value.trim()) {
    adminDescription.value = buildCommercialDescriptionFromAdminInput();
  }

  if (adminOrder && !adminOrder.value.trim()) {
    const currentCount = portfolioGrid
      ? portfolioGrid.querySelectorAll(".project-card").length
      : 0;
    adminOrder.value = String(Math.max(1, currentCount));
  }

  if (adminCoverPreview) {
    adminCoverPreview.src = buildAutoCoverFromUrl(normalizedUrl);
  }

  adminFeedback.textContent =
    "Campos preenchidos automaticamente. Revise e publique.";
}

function setupAdminSegmentationFields() {
  if (
    !adminBusinessBranch ||
    !adminSegmentation ||
    !adminSegmentationOtherWrap ||
    !adminSegmentationOther
  ) {
    return;
  }

  const hydrateAdminSegmentations = () => {
    const selectedBranch = String(adminBusinessBranch.value || "").trim();
    const previousSegmentation = String(adminSegmentation.value || "").trim();
    const options = segmentationsByBusinessBranch[selectedBranch] || [];

    adminSegmentation.innerHTML = "";
    adminSegmentation.disabled = !selectedBranch;

    const placeholder = document.createElement("option");
    placeholder.value = "";
    if (!selectedBranch) {
      placeholder.textContent = "Selecione o ramo primeiro";
    } else {
      placeholder.textContent = options.length
        ? "Selecione a segmentação"
        : "Sem segmentações mapeadas para este ramo";
    }
    adminSegmentation.appendChild(placeholder);

    options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      adminSegmentation.appendChild(option);
    });

    const otherOption = document.createElement("option");
    otherOption.value = "Outro";
    otherOption.textContent = "Outro";
    adminSegmentation.appendChild(otherOption);

    const hasPrevious = Array.from(adminSegmentation.options).some(
      (option) => option.value === previousSegmentation,
    );
    adminSegmentation.value = hasPrevious ? previousSegmentation : "";

    if (selectedBranch && !options.length && !adminSegmentation.value) {
      adminSegmentation.value = "Outro";
    }
  };

  const syncOtherField = () => {
    const isOther = adminSegmentation.value === "Outro";
    adminSegmentationOtherWrap.hidden = !isOther;
    adminSegmentationOther.required = isOther;
    if (!isOther) {
      adminSegmentationOther.value = "";
    }
  };

  syncAdminSegmentationState = () => {
    hydrateAdminSegmentations();
    syncOtherField();
  };

  adminBusinessBranch.addEventListener("change", () => {
    hydrateAdminSegmentations();
    syncOtherField();
  });

  adminSegmentation.addEventListener("change", syncOtherField);

  syncAdminSegmentationState();
}

function setupAdminCoverUpload() {
  if (!adminCoverUpload) {
    return;
  }

  adminCoverUpload.addEventListener("change", () => {
    const selectedFile = adminCoverUpload.files?.[0];
    if (!selectedFile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      if (!result) {
        return;
      }

      selectedCustomCoverDataUrl = result;
      isManualCoverSelection = true;
      if (adminCoverPreview) {
        adminCoverPreview.src = result;
      }
      if (adminFeedback) {
        adminFeedback.textContent =
          "Capa customizada pronta. Clique em salvar para publicar.";
      }
    };

    reader.readAsDataURL(selectedFile);
  });

  if (adminRemoveCoverButton) {
    adminRemoveCoverButton.addEventListener("click", () => {
      selectedCustomCoverDataUrl = "";
      isManualCoverSelection = false;
      if (adminCoverUpload) {
        adminCoverUpload.value = "";
      }
      updateAdminCoverPreviewFromInput();
      if (adminFeedback) {
        adminFeedback.textContent =
          "Capa customizada removida. A capa automatica sera utilizada.";
      }
    });
  }
}

async function setupSupabaseAdminPanel() {
  const persistedConfig = getSupabaseConfig();
  if (persistedConfig) {
    if (supabaseUrlInput) {
      supabaseUrlInput.value = persistedConfig.url;
    }
    if (supabaseAnonKeyInput) {
      supabaseAnonKeyInput.value = persistedConfig.anonKey;
    }
    if (supabaseTableInput) {
      supabaseTableInput.value = persistedConfig.table;
    }
    if (supabaseBucketInput) {
      supabaseBucketInput.value = persistedConfig.bucket;
    }

    setSupabaseStatus("Conexao Supabase carregada. Iniciando tempo real...");
    try {
      await pullProjectsFromSupabase();
      await setupSupabaseRealtime();
      await renderPortfolio();
      renderAdminProjectManager();
      setSupabaseStatus("Supabase conectado com sincronizacao em tempo real.");
    } catch (error) {
      setSupabaseStatus(
        `Falha ao iniciar Supabase: ${error?.message || "erro"}`,
      );
    }
  } else {
    if (supabaseTableInput && !supabaseTableInput.value.trim()) {
      supabaseTableInput.value = "portfolio_projects";
    }
    if (supabaseBucketInput && !supabaseBucketInput.value.trim()) {
      supabaseBucketInput.value = "portfolio-covers";
    }
    setSupabaseStatus("Modo local ativo.");
  }

  if (supabaseConnectButton) {
    supabaseConnectButton.addEventListener("click", async () => {
      const url = String(supabaseUrlInput?.value || "").trim();
      const anonKey = String(supabaseAnonKeyInput?.value || "").trim();
      const table =
        String(supabaseTableInput?.value || "").trim() || "portfolio_projects";
      const bucket =
        String(supabaseBucketInput?.value || "").trim() || "portfolio-covers";

      if (!url || !anonKey) {
        setSupabaseStatus("Preencha URL e anon key para conectar.");
        return;
      }

      saveSupabaseConfig({ url, anonKey, table, bucket });
      supabaseClient = null;

      try {
        await pullProjectsFromSupabase();
        await setupSupabaseRealtime();
        await renderPortfolio();
        renderAdminProjectManager();
        setSupabaseStatus("Conectado. Portfolio sincronizado com Supabase.");
      } catch (error) {
        setSupabaseStatus(
          `Erro ao conectar Supabase: ${error?.message || "erro"}`,
        );
      }
    });
  }

  if (supabaseSyncNowButton) {
    supabaseSyncNowButton.addEventListener("click", async () => {
      try {
        const result = await syncLocalProjectsToSupabase();
        if (result.skipped) {
          setSupabaseStatus("Conecte o Supabase para sincronizar.");
          return;
        }
        setSupabaseStatus(
          `Sincronizacao manual concluida: ${result.synced} projeto(s).`,
        );
      } catch (error) {
        setSupabaseStatus(
          `Falha na sincronizacao manual: ${error?.message || "erro"}`,
        );
      }
    });
  }

  if (supabaseDisconnectButton) {
    supabaseDisconnectButton.addEventListener("click", async () => {
      const client = getSupabaseClient();
      if (client && supabaseRealtimeChannel) {
        await client.removeChannel(supabaseRealtimeChannel);
      }
      supabaseRealtimeChannel = null;
      supabaseClient = null;
      clearSupabaseConfig();
      setSupabaseStatus("Supabase desconectado. Modo local ativo.");
    });
  }
}

function handleGenerateAdminDescription() {
  if (!adminDescription) {
    return;
  }

  adminDescription.value = buildCommercialDescriptionFromAdminInput();
  if (adminFeedback) {
    adminFeedback.textContent =
      "Descricao comercial criada com IA local. Revise antes de salvar.";
  }
}

function updateAdminCoverPreviewFromInput() {
  if (!adminCoverPreview) {
    return;
  }

  if (isManualCoverSelection && selectedCustomCoverDataUrl) {
    adminCoverPreview.src = selectedCustomCoverDataUrl;
    return;
  }

  const rawUrl = String(adminUrl?.value || "").trim();
  adminCoverPreview.src = buildAutoCoverFromUrl(rawUrl);
}

function prepareProjectListForDisplay(projects) {
  return [...projects].sort((a, b) => {
    const orderA = Number.isFinite(Number(a.order))
      ? Number(a.order)
      : Infinity;
    const orderB = Number.isFinite(Number(b.order))
      ? Number(b.order)
      : Infinity;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return String(a.name || "").localeCompare(String(b.name || ""), "pt-BR");
  });
}

function resetAdminProjectEditor() {
  editingProjectKey = null;
  setProjectEditorMode(false);
  selectedCustomCoverDataUrl = "";
  isManualCoverSelection = false;

  if (adminProjectForm) {
    adminProjectForm.reset();
  }

  if (adminCoverUpload) {
    adminCoverUpload.value = "";
  }

  syncAdminSegmentationState?.();

  if (adminCoverPreview) {
    adminCoverPreview.src = buildAutoCoverFromUrl("");
  }

  if (adminStatus) {
    adminStatus.value = "published";
  }

  if (adminFeedback) {
    adminFeedback.textContent = "Novo projeto pronto para preenchimento.";
  }
}

async function syncProjectsByUrls() {
  if (!isAuthorizedAdmin) {
    setSyncFeedback("Acesso bloqueado ao painel admin.");
    return;
  }

  const raw = (syncUrlsInput?.value || "").trim();
  if (!raw) {
    setSyncFeedback("Informe pelo menos uma URL para sincronizar.");
    return;
  }

  const urls = raw
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => /^https?:\/\//i.test(item));

  if (!urls.length) {
    setSyncFeedback("Nenhuma URL valida encontrada. Use http:// ou https://.");
    return;
  }

  const projects = dedupeProjects(urls.map((url) => buildProjectFromUrl(url)));

  if (!projects.length) {
    setSyncFeedback("Nenhuma URL valida para sincronizar.");
    return;
  }

  const current = getStoredProjects();
  const merged = dedupeProjects([...projects, ...current]);
  const addedCount = Math.max(merged.length - current.length, 0);
  saveProjects(merged);
  try {
    const syncResult = await syncLocalProjectsToSupabase();
    if (!syncResult.skipped) {
      setSupabaseStatus(
        `Sincronizacao concluida: ${syncResult.synced} projeto(s).`,
      );
    }
  } catch (error) {
    setSupabaseStatus(
      `URLs salvas localmente. Erro de sync Supabase: ${error?.message || "erro"}`,
    );
  }
  await renderPortfolio();
  renderAdminProjectManager();
  if (!addedCount) {
    setSyncFeedback("Todas as URLs informadas ja estao publicadas no site.");
    return;
  }

  setSyncFeedback(`${addedCount} projeto(s) novo(s) publicado(s) no site.`);
}

function createProjectCard(project) {
  const card = document.createElement("article");
  const cover = document.createElement("img");
  const titleRow = document.createElement("div");
  const favicon = document.createElement("img");
  const title = document.createElement("h4");
  const preview = document.createElement("div");
  const description = document.createElement("p");
  const statusBadge = document.createElement("span");

  const coverUrl = getProjectCoverUrl(project);

  card.className = "project-card template-card portfolio-template-card";
  cover.className = "template-thumb project-cover";
  titleRow.className = "template-title-row";
  favicon.className = "template-favicon";
  preview.className = "template-preview";
  cover.loading = "lazy";
  cover.decoding = "async";
  cover.src = coverUrl;
  cover.alt = `Capa do projeto ${project.name}`;
  favicon.src = coverUrl;
  favicon.alt = "";
  favicon.setAttribute("aria-hidden", "true");

  title.textContent = project.name;
  preview.textContent = buildPortfolioPreview(project);
  description.textContent = String(project.description || "").trim();
  statusBadge.className = "project-status-badge";
  statusBadge.textContent =
    project.is_published === false ? "Rascunho" : "Projeto publicado";

  titleRow.appendChild(favicon);
  titleRow.appendChild(title);
  card.appendChild(cover);
  card.appendChild(titleRow);
  card.appendChild(preview);
  card.appendChild(description);
  card.appendChild(statusBadge);
  return card;
}

function setupPortfolioMarquee() {
  if (!portfolioGrid) {
    return;
  }

  portfolioGrid.classList.remove("is-marquee");
  portfolioGrid.style.removeProperty("--marquee-duration");

  portfolioGrid.querySelectorAll(".project-card.is-clone").forEach((clone) => {
    clone.remove();
  });

  const originals = Array.from(portfolioGrid.querySelectorAll(".project-card"));
  if (originals.length < 2) {
    return;
  }

  originals.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.classList.add("is-clone");
    clone.setAttribute("aria-hidden", "true");

    clone.querySelectorAll("a").forEach((link) => {
      link.setAttribute("tabindex", "-1");
      link.setAttribute("aria-hidden", "true");
    });

    portfolioGrid.appendChild(clone);
  });

  const duration = Math.max(32, originals.length * 9);
  portfolioGrid.style.setProperty("--marquee-duration", `${duration}s`);
  portfolioGrid.classList.add("is-marquee");
}

function renderPortfolioCards(projects) {
  if (!portfolioGrid) {
    return;
  }

  portfolioGrid.innerHTML = "";
  projects.forEach((project) => {
    portfolioGrid.appendChild(createProjectCard(project));
  });

  setupPortfolioMarquee();
}

async function renderPortfolio() {
  const composeAndRender = (sourceProjects) => {
    const projects = prepareProjectListForDisplay(
      attachStoredOrder(attachStoredCovers(dedupeProjects(sourceProjects))),
    );
    renderPortfolioCards(projects);
  };

  composeAndRender(getPublishedProjects(getStoredProjects()));
}

function updateRecommendation() {
  if (!projectType || !projectBusinessBranch || !projectSegmentation) {
    return;
  }

  const selectedType = projectType.value;
  const selectedGoals = getSelectedGoals();
  const selectedGoalLabels = getGoalLabels(selectedGoals);
  const selectedSegment = getSelectedSegment();
  const hasValidOtherSegment =
    projectSegmentation.value !== "Outro" ||
    String(projectSegmentOther?.value || "").trim().length >= 3;

  if (
    selectedGoals.length === 0 ||
    !projectBusinessBranch.value ||
    !projectSegmentation.value ||
    !hasValidOtherSegment
  ) {
    recommendTitle.textContent =
      "Selecione segmento e ao menos 1 objetivo para ver a classificacao de projeto.";
    recommendText.textContent = "";
    if (recommendAiExplanation) {
      recommendAiExplanation.textContent = "";
    }
    recommendList.innerHTML = "";
    if (recommendTemplateCard) {
      recommendTemplateCard.innerHTML = "";
    }
    if (aiSuggestionText) {
      aiSuggestionText.textContent =
        "Preencha o formulario para receber uma sugestao de caminho.";
    }
    if (aiFollowProjectButton) {
      aiFollowProjectButton.disabled = true;
      aiFollowProjectButton.dataset.suggestedType = "";
    }
    if (aiChooseOtherButton) {
      aiChooseOtherButton.disabled = true;
      aiChooseOtherButton.dataset.suggestedType = "";
    }
    setAiSuggestionDecision("idle");
    if (ctaWhatsapp) {
      ctaWhatsapp.href = "https://wa.me/5541991443794";
    }
    return;
  }

  const details = buildGoalRecommendation(selectedGoals);
  if (!details) {
    return;
  }

  const rankedTypes = rankProjectTypes(
    selectedGoals,
    selectedSegment.name,
    selectedSegment.pdv,
    selectedType,
  );
  const suggestedRank = rankedTypes.slice(0, 3);
  const suggestedTypes = suggestedRank.map((item) => item.type);
  const suggestedType = suggestedTypes[0] || selectedType;
  const hasSelectedType = Boolean(selectedType);
  const shouldKeepSelected =
    hasSelectedType && suggestedTypes.includes(selectedType);

  recommendTitle.textContent = `${details.title} para ${selectedSegment.branch} (${selectedSegment.name})`;
  recommendText.textContent = details.text;
  if (recommendAiExplanation) {
    recommendAiExplanation.textContent = `ANÁLISE VTS VISION: para o ramo ${selectedSegment.branch}, segmentacao ${selectedSegment.name} (PDV ${selectedSegment.pdv}), os objetivos ${selectedGoalLabels.join(", ").toLowerCase()} apontam esta classificacao de tipo de projeto.`;
  }
  recommendList.innerHTML = suggestedRank
    .slice(0, 3)
    .map((item) => `<li>${item.type}</li>`)
    .join("");

  if (recommendTemplateCard) {
    const templateCards = Array.from(
      document.querySelectorAll(".template-grid .template-card"),
    );

    recommendTemplateCard.innerHTML = "";

    suggestedTypes.forEach((type, index) => {
      const matchingCard = templateCards.find(
        (card) =>
          String(card.getAttribute("data-template-type") || "") === type,
      );

      if (!matchingCard) {
        return;
      }

      const clone = matchingCard.cloneNode(true);
      clone.classList.add("is-recommended");
      if (index === 0) {
        clone.classList.add("is-top-recommended");
      }
      recommendTemplateCard.appendChild(clone);
    });
  }

  if (aiSuggestionText) {
    if (!hasSelectedType) {
      aiSuggestionText.textContent = `Sugestao automatizada: tipo mais recomendado agora e ${suggestedType}.`;
    } else {
      aiSuggestionText.textContent = shouldKeepSelected
        ? `Seu tipo selecionado esta bem posicionado no ranking. Recomendacao: seguir com ${selectedType}.`
        : `Sugestao automatizada: para seu contexto, considere migrar de ${selectedType} para ${suggestedType}.`;
    }
  }

  if (aiFollowProjectButton) {
    aiFollowProjectButton.disabled = !suggestedType;
    aiFollowProjectButton.dataset.suggestedType = suggestedType;
  }

  if (aiChooseOtherButton) {
    aiChooseOtherButton.disabled = !hasSelectedType || shouldKeepSelected;
    aiChooseOtherButton.dataset.suggestedType = suggestedType;
  }

  setAiSuggestionDecision("idle");

  const message = buildWhatsappStructuredMessage({
    requestedType: hasSelectedType ? selectedType : suggestedType,
    ranking: suggestedRank,
  });
  if (ctaWhatsapp) {
    ctaWhatsapp.href = `https://wa.me/5541991443794?text=${encodeURIComponent(message)}`;
  }
}

function setupBudgetFormWhatsapp() {
  if (!ctaWhatsapp) {
    return;
  }

  ctaWhatsapp.addEventListener("click", (event) => {
    event.preventDefault();

    const preferredType =
      String(projectType?.value || "").trim() ||
      String(aiFollowProjectButton?.dataset?.suggestedType || "").trim();

    const message = buildWhatsappStructuredMessage({
      requestedType: preferredType,
      ranking: getTopRankForMessage(preferredType),
    });

    openWhatsappWithMessage(message);
  });
}

function setupGoalPickerBehaviour() {
  if (!projectGoalInputs.length) {
    return;
  }

  const maxGoals = 3;

  const updateGoalState = (feedbackMessage) => {
    const checkedCount = getSelectedGoals().length;

    projectGoalInputs.forEach((input) => {
      if (!input.checked) {
        input.disabled = checkedCount >= maxGoals;
        return;
      }
      input.disabled = false;
    });

    if (projectGoalFeedback) {
      projectGoalFeedback.textContent =
        feedbackMessage ||
        `${checkedCount} de ${maxGoals} objetivos selecionados.`;
      projectGoalFeedback.classList.toggle(
        "is-warning",
        checkedCount >= maxGoals,
      );
    }
  };

  projectGoalInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selectedCount = getSelectedGoals().length;

      if (selectedCount > maxGoals) {
        input.checked = false;
        updateGoalState(
          `Voce pode selecionar no maximo ${maxGoals} objetivos.`,
        );
        return;
      }

      updateGoalState();
      updateRecommendation();
    });
  });

  if (projectGoalGroup) {
    projectGoalGroup.addEventListener("keydown", (event) => {
      const isSelectAllShortcut =
        (event.ctrlKey || event.metaKey) &&
        String(event.key || "").toLowerCase() === "a";

      if (!isSelectAllShortcut) {
        return;
      }

      event.preventDefault();
    });
  }

  updateGoalState();
}

function setupSegmentFieldBehaviour() {
  if (!projectBusinessBranch || !projectSegmentation || !segmentOtherWrap) {
    return;
  }

  const hydrateSegmentationOptions = () => {
    const selectedBranch = String(projectBusinessBranch.value || "").trim();
    const previousValue = projectSegmentation.value;
    const options = segmentationsByBusinessBranch[selectedBranch] || [];
    const pdv = getPdvByBusinessBranch(selectedBranch);

    projectSegmentation.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = options.length
      ? "Selecione a segmentacao"
      : "Sem lista para este ramo";
    projectSegmentation.appendChild(placeholder);

    options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      option.dataset.pdv = pdv;
      projectSegmentation.appendChild(option);
    });

    const otherOption = document.createElement("option");
    otherOption.value = "Outro";
    otherOption.textContent = "Outro";
    otherOption.dataset.pdv = pdv;
    projectSegmentation.appendChild(otherOption);

    const hasPreviousValue = Array.from(projectSegmentation.options).some(
      (option) => option.value === previousValue,
    );
    projectSegmentation.value = hasPreviousValue ? previousValue : "";
  };

  const syncSegmentField = () => {
    const isOther = projectSegmentation.value === "Outro";
    segmentOtherWrap.hidden = !isOther;
    if (projectSegmentOther) {
      projectSegmentOther.required = isOther;
      if (!isOther) {
        projectSegmentOther.value = "";
      }
    }
  };

  projectBusinessBranch.addEventListener("change", () => {
    hydrateSegmentationOptions();
    syncSegmentField();
    updateRecommendation();
  });

  projectSegmentation.addEventListener("change", () => {
    syncSegmentField();
    updateRecommendation();
  });

  if (projectSegmentOther) {
    projectSegmentOther.addEventListener("input", updateRecommendation);
  }

  hydrateSegmentationOptions();
  syncSegmentField();
}

function setupRecommendationDecisionActions() {
  if (aiFollowProjectButton) {
    aiFollowProjectButton.addEventListener("click", () => {
      const suggested = String(
        aiFollowProjectButton.dataset.suggestedType || "",
      );
      if (suggested && projectType) {
        projectType.value = suggested;
        updateRecommendation();
      }
      setAiSuggestionDecision("follow");
    });
  }

  if (aiChooseOtherButton) {
    aiChooseOtherButton.addEventListener("click", () => {
      const suggested = String(aiChooseOtherButton.dataset.suggestedType || "");
      if (!suggested || !projectType) {
        return;
      }

      const candidate = Array.from(projectType.options).find(
        (option) => option.value === suggested,
      );

      if (!candidate) {
        return;
      }

      projectType.value = suggested;
      setAiSuggestionDecision("switch");
      updateRecommendation();
    });
  }
}

function setupServiceRequestButtons() {
  if (!serviceRequestButtons.length) {
    return;
  }

  const directRedirectByType = {
    "Mentoria PF":
      "https://vilarinhofran-ui.github.io/Mentoria-Vilarinho-Tech/mentoria.index.html#investir",
    "LinkedIn Pro Visibility":
      "https://vilarinhofran-ui.github.io/Mentoria-Vilarinho-Tech/index.html",
  };

  serviceRequestButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = button.closest(".template-card");
      const templateType = String(
        card?.getAttribute("data-template-type") || "",
      ).trim();

      const directRedirect = directRedirectByType[templateType];
      if (directRedirect) {
        event.preventDefault();
        window.open(directRedirect, "_blank", "noopener,noreferrer");
        return;
      }

      event.preventDefault();

      const message = buildWhatsappStructuredMessage({
        requestedType: templateType,
        serviceValueInfo: getServiceValueInfo(templateType),
      });

      openWhatsappWithMessage(message);
    });
  });
}

function setupContactFormWhatsapp() {
  if (!contactSubmitButton) {
    return;
  }

  contactSubmitButton.addEventListener("click", () => {
    const preferredType =
      String(projectType?.value || "").trim() ||
      String(aiFollowProjectButton?.dataset?.suggestedType || "").trim();

    const message = buildWhatsappStructuredMessage({
      requestedType: preferredType,
    });

    openWhatsappWithMessage(message);
  });
}

async function handleAdminSubmit(event) {
  event.preventDefault();

  if (!isAuthorizedAdmin) {
    adminFeedback.textContent =
      "Acesso admin bloqueado. Faça login para continuar.";
    return;
  }

  const rawUrl = String(adminUrl?.value || "").trim();
  if (!rawUrl) {
    adminFeedback.textContent =
      "Informe a URL do projeto para cadastrar como na referencia anterior.";
    adminUrl?.focus();
    return;
  }

  if (!isHttpUrl(rawUrl)) {
    adminFeedback.textContent =
      "URL invalida. Use o formato completo com http:// ou https://.";
    adminUrl?.focus();
    return;
  }

  const providedName = adminName.value.trim();
  const providedType = adminType.value.trim();
  const providedBranch = String(adminBusinessBranch?.value || "").trim();
  const providedSegmentation = getAdminSegmentationValue();
  const providedCommercialFocus = String(
    adminCommercialFocus?.value || "",
  ).trim();
  const providedDescription = adminDescription.value.trim();
  const url = normalizeUrl(rawUrl);
  const order = Number(adminOrder?.value || "");
  const statusValue = String(adminStatus?.value || "published");
  const submitMode = String(
    event.submitter?.dataset?.submitMode || "save-publish",
  );
  const shouldPublish =
    submitMode === "publish" ||
    submitMode === "save-publish" ||
    statusValue === "published";
  const coverUrl = buildAutoCoverFromUrl(url);

  const type = providedType || (url ? inferProjectTypeFromUrl(url) : "");
  const name = providedName || (url ? inferProjectNameFromUrl(url) : "");
  const branch = providedBranch || inferBusinessBranchFromType(type);
  const segmentation = providedSegmentation || inferSegmentationFromType(type);
  const description = providedDescription || buildDescriptionFromType(type);
  let finalCoverUrl = selectedCustomCoverDataUrl || coverUrl;

  if (adminCoverUpload?.files?.[0]) {
    try {
      const uploadedCoverUrl = await uploadCoverToSupabase(
        adminCoverUpload.files[0],
      );
      if (uploadedCoverUrl) {
        finalCoverUrl = uploadedCoverUrl;
      }
    } catch (error) {
      adminFeedback.textContent = `Falha ao enviar capa para Supabase: ${error?.message || "erro"}.`;
      return;
    }
  }

  if (!name || !type || !description || !url) {
    adminFeedback.textContent =
      "Nao foi possivel gerar os dados do projeto. Revise a URL e tente novamente.";
    return;
  }

  const projects = getStoredProjects();
  const draftProject = {
    name,
    type,
    branch,
    segmentation,
    commercial_focus: providedCommercialFocus,
    description,
    url,
    is_published: shouldPublish,
  };

  if (editingProjectKey) {
    const editIndex = findStoredProjectIndexByKey(editingProjectKey);
    if (editIndex < 0) {
      adminFeedback.textContent = "Projeto em edicao nao foi encontrado.";
      editingProjectKey = null;
      setProjectEditorMode(false);
      return;
    }

    const duplicateIndex = projects.findIndex((project, index) => {
      if (index === editIndex) {
        return false;
      }
      return projectFingerprint(project) === projectFingerprint(draftProject);
    });

    if (duplicateIndex >= 0) {
      adminFeedback.textContent =
        "Ja existe outro projeto com este nome/tipo ou URL.";
      return;
    }

    const previous = projects[editIndex];
    projects[editIndex] = {
      ...draftProject,
      is_published:
        submitMode === "save"
          ? statusValue === "published"
          : submitMode === "publish" || submitMode === "save-publish"
            ? true
            : previous.is_published !== false,
    };
    saveProjects(projects);
    saveProjectCover(draftProject, finalCoverUrl);
    saveProjectOrder(draftProject, order);
    try {
      await syncProjectToSupabase({
        ...projects[editIndex],
        order,
        coverUrl: finalCoverUrl,
      });
      setSupabaseStatus("Projeto atualizado no Supabase em tempo real.");
    } catch (error) {
      setSupabaseStatus(
        `Projeto salvo localmente. Erro de sync Supabase: ${error?.message || "erro"}`,
      );
    }
    await renderPortfolio();
    renderAdminProjectManager();
    resetAdminProjectEditor();
    adminFeedback.textContent =
      projects[editIndex].is_published === false
        ? "Projeto atualizado como rascunho."
        : "Projeto atualizado e publicado com sucesso.";
    return;
  }

  const duplicateExists = projects.some(
    (project) =>
      projectFingerprint(project) === projectFingerprint(draftProject),
  );

  if (duplicateExists) {
    adminFeedback.textContent = "Este projeto ja existe no site (duplicado).";
    return;
  }

  saveProjects([draftProject, ...projects]);
  saveProjectCover({ name, type, url }, finalCoverUrl);
  saveProjectOrder({ name, type, url }, order);
  try {
    await syncProjectToSupabase({
      ...draftProject,
      order,
      coverUrl: finalCoverUrl,
    });
    setSupabaseStatus("Novo projeto sincronizado com Supabase.");
  } catch (error) {
    setSupabaseStatus(
      `Projeto salvo localmente. Erro de sync Supabase: ${error?.message || "erro"}`,
    );
  }
  await renderPortfolio();
  renderAdminProjectManager();

  resetAdminProjectEditor();
  adminFeedback.textContent = shouldPublish
    ? "Projeto salvo e publicado no site com sucesso."
    : "Projeto salvo como rascunho com sucesso.";
}

function setupCrossTabSiteSync() {
  window.addEventListener("storage", async (event) => {
    if (!event.key) {
      return;
    }

    if (
      event.key !== storageKey &&
      event.key !== projectCoversKey &&
      event.key !== projectOrdersKey
    ) {
      return;
    }

    await renderPortfolio();
    renderAdminProjectManager();
    setSyncFeedback("Atualizacao detectada. Site sincronizado nesta aba.");
  });
}

function setupMenu() {
  if (!menuToggle || !menu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      menu.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const revealBlocks = document.querySelectorAll(".section-reveal");

  if (!("IntersectionObserver" in window)) {
    revealBlocks.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealBlocks.forEach((item) => observer.observe(item));
}

function setupFloatingIconsBySection() {
  const floatingIcons = document.querySelector(".bg-floating-icons");
  const sections = Array.from(document.querySelectorAll("main section"));

  if (!floatingIcons || !sections.length) {
    return;
  }

  const resolveZone = (section) =>
    section.classList.contains("hero") ? "hero" : "inner";

  const setZone = (zone) => {
    document.body.setAttribute("data-icon-zone", zone);
  };

  setZone(resolveZone(sections[0]));

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) {
        return;
      }

      const zone = resolveZone(visible[0].target);
      setZone(zone);
    },
    {
      threshold: [0.2, 0.35, 0.5, 0.7],
      rootMargin: "-12% 0px -35% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupInputRedirects() {
  const redirectInputs = document.querySelectorAll("[data-redirect-url]");

  redirectInputs.forEach((input) => {
    const open = () => {
      const url = input.getAttribute("data-redirect-url");
      if (!url) {
        return;
      }

      if (input.dataset.redirectDone === "1") {
        return;
      }

      input.dataset.redirectDone = "1";
      window.open(url, "_blank", "noopener,noreferrer");
    };

    input.addEventListener("click", open);
    input.addEventListener("focus", open);
  });
}

function setupUrgentBarTyping() {
  if (!urgentBar) {
    return;
  }

  const fullText = String(urgentBar.textContent || "").trim();
  if (!fullText) {
    return;
  }

  urgentBar.setAttribute("aria-label", fullText);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    urgentBar.textContent = fullText;
    return;
  }

  urgentBar.textContent = "";
  urgentBar.classList.add("is-typing");

  let index = 0;
  const typingDelay = 42;

  const typeNextCharacter = () => {
    index += 1;
    urgentBar.textContent = fullText.slice(0, index);

    if (index < fullText.length) {
      window.setTimeout(typeNextCharacter, typingDelay);
      return;
    }

    window.setTimeout(() => {
      urgentBar.classList.remove("is-typing");
    }, 800);
  };

  window.setTimeout(typeNextCharacter, 200);
}

function setupAboutHeadlineTyping() {
  if (!aboutHeadline || !aboutHeadlinePrimary || !aboutHeadlineAccent) {
    return;
  }

  const primaryText = String(aboutHeadlinePrimary.textContent || "").trim();
  const accentText = String(aboutHeadlineAccent.textContent || "").trim();

  if (!primaryText || !accentText) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    aboutHeadlinePrimary.textContent = primaryText;
    aboutHeadlineAccent.textContent = ` ${accentText}`;
    return;
  }

  aboutHeadlinePrimary.textContent = "";
  aboutHeadlineAccent.textContent = "";
  aboutHeadline.classList.add("is-typing");

  const segments = [primaryText, ` ${accentText}`];
  const targets = [aboutHeadlinePrimary, aboutHeadlineAccent];
  const startTypingCycle = () => {
    aboutHeadlinePrimary.textContent = "";
    aboutHeadlineAccent.textContent = "";
    aboutHeadline.classList.add("is-typing");

    let segmentIndex = 0;
    let charIndex = 0;

    const typeNextCharacter = () => {
      const currentText = segments[segmentIndex];
      charIndex += 1;
      targets[segmentIndex].textContent = currentText.slice(0, charIndex);

      if (charIndex < currentText.length) {
        window.setTimeout(typeNextCharacter, 68);
        return;
      }

      segmentIndex += 1;
      charIndex = 0;

      if (segmentIndex < segments.length) {
        window.setTimeout(typeNextCharacter, 220);
        return;
      }

      window.setTimeout(() => {
        aboutHeadline.classList.remove("is-typing");
        window.setTimeout(startTypingCycle, 1400);
      }, 1400);
    };

    window.setTimeout(typeNextCharacter, 320);
  };

  startTypingCycle();
}

function setupKeyboardShortcuts() {
  if (!projectBusinessBranch && !projectSegmentation) {
    return;
  }

  document.addEventListener("keydown", (event) => {
    const key = String(event.key || "").toLowerCase();
    const isShortcut =
      (event.ctrlKey || event.metaKey) && event.shiftKey && key === "s";

    if (!isShortcut) {
      return;
    }

    event.preventDefault();

    const budgetSection = document.getElementById("orcamento");
    budgetSection?.scrollIntoView({ behavior: "smooth", block: "start" });

    const targetField = projectBusinessBranch || projectSegmentation;
    window.setTimeout(() => {
      targetField?.focus({ preventScroll: true });
      if (targetField && typeof targetField.select === "function") {
        targetField.select();
      }
    }, 220);
  });
}

async function setupAdminPanelLocal() {
  syncExposedProjectsToAdminPanel();

  const hasSession = hasAdminSession();
  if (hasSession) {
    // Keep admin-only mode consistent: authenticated users always land on admin panel.
    openAdminPanel();
  } else if (window.location.hash === "#admin") {
    openAdminLogin();
  } else if (window.location.hash === "#admin-login") {
    openAdminLogin();
  } else {
    setAdminAccess(false);
  }

  window.addEventListener("hashchange", () => {
    const hasActiveSession = hasAdminSession();
    const currentHash = window.location.hash;

    if (currentHash === "#admin") {
      if (hasActiveSession) {
        openAdminPanel();
      } else {
        setAdminAccess(false);
        setAdminLoginFeedback(
          "Entre com usuario e senha para acessar o admin.",
        );
        openAdminLogin();
      }
      return;
    }

    if (currentHash === "#admin-login") {
      setAdminAccess(false);
      openAdminLogin();
    }
  });

  setSyncFeedback(
    "Painel conectado. Pronto para publicar atualizacoes no site.",
  );

  await renderPortfolio();
  renderAdminProjectManager();
}

if (projectType) {
  projectType.addEventListener("change", updateRecommendation);
}

if (clientName) {
  clientName.addEventListener("input", updateRecommendation);
}

if (clientWhatsapp) {
  clientWhatsapp.addEventListener("input", updateRecommendation);
}

if (clientEmail) {
  clientEmail.addEventListener("input", updateRecommendation);
}

if (projectInvestmentRange) {
  projectInvestmentRange.addEventListener("change", updateRecommendation);
}

if (contactNameField) {
  contactNameField.addEventListener("input", updateRecommendation);
}

if (contactPhoneField) {
  contactPhoneField.addEventListener("input", updateRecommendation);
}

if (contactEmailField) {
  contactEmailField.addEventListener("input", updateRecommendation);
}

if (contactBusinessField) {
  contactBusinessField.addEventListener("change", updateRecommendation);
}

if (contactGoalField) {
  contactGoalField.addEventListener("change", updateRecommendation);
}

if (contactMessageField) {
  contactMessageField.addEventListener("input", updateRecommendation);
}

if (projectGoalInputs.length) {
  setupGoalPickerBehaviour();
}

if (projectBusinessBranch && projectSegmentation) {
  setupSegmentFieldBehaviour();
}

setupRecommendationDecisionActions();
setupBudgetFormWhatsapp();
setupServiceRequestButtons();
setupContactFormWhatsapp();

if (adminProjectForm) {
  adminProjectForm.addEventListener("submit", handleAdminSubmit);
}

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", handleAdminCredentialLogin);
}

if (adminGoogleContinueButton) {
  adminGoogleContinueButton.addEventListener(
    "click",
    handleGoogleAdminContinue,
  );
}

if (adminForgotPasswordButton) {
  adminForgotPasswordButton.addEventListener("click", handleForgotPassword);
}

if (adminLoginTriggers.length) {
  adminLoginTriggers.forEach((link) => {
    link.addEventListener("click", handleAdminLoginTrigger);
  });
}

if (syncUrlsButton) {
  syncUrlsButton.addEventListener("click", syncProjectsByUrls);
}

if (adminUrl) {
  adminUrl.addEventListener("input", updateAdminCoverPreviewFromInput);
  adminUrl.addEventListener("blur", updateAdminCoverPreviewFromInput);
}

if (adminAutofillUrlButton) {
  adminAutofillUrlButton.addEventListener("click", fillProjectFieldsFromUrl);
}

if (adminGenerateDescriptionAiButton) {
  adminGenerateDescriptionAiButton.addEventListener(
    "click",
    handleGenerateAdminDescription,
  );
}

if (adminNewProjectButton) {
  adminNewProjectButton.addEventListener("click", resetAdminProjectEditor);
}

if (adminLogoutButton) {
  adminLogoutButton.addEventListener("click", logoutAdminPanel);
}

setupAdminSegmentationFields();
setupAdminCoverUpload();
setupSupabaseAdminPanel();

if (adminProjectManager) {
  adminProjectManager.addEventListener("click", handleAdminManagerAction);
}

if (connectGithubButton) {
  connectGithubButton.addEventListener("click", () => {
    openExternalPlatformLogin("github");
  });
}

if (connectNetlifyButton) {
  connectNetlifyButton.addEventListener("click", () => {
    openExternalPlatformLogin("netlify");
  });
}

setupMenu();
setupUrgentBarTyping();
setupAboutHeadlineTyping();
setupReveal();
setupFloatingIconsBySection();
setupInputRedirects();
setupKeyboardShortcuts();
setupCrossTabSiteSync();
setupAdminPanelLocal();
