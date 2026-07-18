const ALLOWED_ADMIN_EMAIL = "vilarinhotechsolutionsvts@gmail.com";

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".nav a");

const projectType = document.getElementById("project-type");
const projectGoal = document.getElementById("project-goal");
const recommendTitle = document.getElementById("recommend-title");
const recommendText = document.getElementById("recommend-text");
const recommendList = document.getElementById("recommend-list");
const ctaWhatsapp = document.getElementById("cta-whatsapp");

const portfolioGrid = document.getElementById("portfolio-grid");
const adminProjectForm = document.getElementById("admin-project-form");
const adminName = document.getElementById("admin-name");
const adminType = document.getElementById("admin-type");
const adminDescription = document.getElementById("admin-description");
const adminUrl = document.getElementById("admin-url");
const adminCoverUrl = document.getElementById("admin-cover-url");
const adminAutofillUrlButton = document.getElementById("admin-autofill-url");
const adminFeedback = document.getElementById("admin-feedback");
const adminProjectFields = document.getElementById("admin-project-fields");
const adminSection = document.getElementById("admin");
const adminLoginTriggers = document.querySelectorAll(".admin-login-trigger");
const syncUrlsInput = document.getElementById("sync-urls");
const syncUrlsButton = document.getElementById("sync-urls-btn");
const syncUrlsFeedback = document.getElementById("sync-urls-feedback");

const supabaseUrlInput = document.getElementById("supabase-url");
const supabaseAnonKeyInput = document.getElementById("supabase-anon-key");
const supabaseConnectButton = document.getElementById("supabase-connect");
const supabaseStatus = document.getElementById("supabase-status");
const adminGoogleLoginButton = document.getElementById("admin-google-login");
const adminGoogleLogoutButton = document.getElementById("admin-google-logout");
const adminAuthStatus = document.getElementById("admin-auth-status");
const connectGithubButton = document.getElementById("connect-github");
const connectNetlifyButton = document.getElementById("connect-netlify");
const externalConnectStatus = document.getElementById(
  "external-connect-status",
);

const storageKey = "vts_public_projects";
const projectCoversKey = "vts_project_covers";
const supabaseConfigKey = "vts_supabase_config";
let supabaseClient = null;
let isAuthorizedAdmin = false;

const defaultProjects = [
  {
    name: "Residencial Valencia",
    type: "Site Institucional",
    description: "Site institucional focado em autoridade local.",
    url: "https://residencialvalencia.lovable.app/",
  },
  {
    name: "Landing de Conversao",
    type: "Landing Page",
    description: "Pagina enxuta com foco em leads e WhatsApp.",
    url: "",
  },
  {
    name: "E-commerce de Nicho",
    type: "E-commerce",
    description: "Catalogo e checkout para vendas recorrentes.",
    url: "",
  },
];

const goalMap = {
  "vender-online": {
    title: "Foco em vendas online",
    text: "Seu objetivo pede uma estrutura voltada para conversao e pagamento facilitado.",
    tips: [
      "Priorize paginas de produto com CTA forte.",
      "Integre meios de pagamento e recuperacao de carrinho.",
      "Inclua prova social e gatilhos de confianca.",
    ],
  },
  "captar-leads": {
    title: "Foco em geracao de leads",
    text: "Uma jornada curta com oferta clara tende a gerar mais contatos qualificados.",
    tips: [
      "Use formulario simples com oferta objetiva.",
      "Conecte WhatsApp e automacao de resposta.",
      "Acompanhe origem dos leads por canal.",
    ],
  },
  autoridade: {
    title: "Foco em posicionamento da marca",
    text: "Seu projeto deve fortalecer autoridade e confianca para facilitar o fechamento.",
    tips: [
      "Destaque cases e diferenciais competitivos.",
      "Organize paginas institucionais e depoimentos.",
      "Trabalhe SEO local e conteudo de credibilidade.",
    ],
  },
  automatizar: {
    title: "Foco em eficiencia operacional",
    text: "Voce precisa de recursos para reduzir tarefas manuais e ganhar escala.",
    tips: [
      "Mapeie os processos com maior retrabalho.",
      "Defina permissoes e fluxo no painel administrativo.",
      "Conecte APIs e notificacoes para automatizar etapas.",
    ],
  },
  "produto-digital": {
    title: "Foco em produto digital",
    text: "O ideal e combinar aquisicao, onboarding e retencao em uma plataforma organizada.",
    tips: [
      "Valide MVP com paginas de entrada e lista de espera.",
      "Inclua area logada e metricas de uso.",
      "Planeje evolucao por versoes com base em dados.",
    ],
  },
};

function setStatus(message) {
  if (supabaseStatus) {
    supabaseStatus.textContent = message;
  }
}

function setAuthStatus(message) {
  if (adminAuthStatus) {
    adminAuthStatus.textContent = message;
  }
}

function setExternalConnectStatus(message) {
  if (externalConnectStatus) {
    externalConnectStatus.textContent = message;
  }
}

function setAdminAccess(enabled) {
  isAuthorizedAdmin = enabled;

  if (adminAuthStatus) {
    adminAuthStatus.classList.toggle("is-authorized", enabled);
    adminAuthStatus.classList.toggle("is-locked", !enabled);
  }

  if (adminProjectFields) {
    adminProjectFields.hidden = !enabled;
  }

  if (adminGoogleLogoutButton) {
    adminGoogleLogoutButton.hidden = !enabled;
  }

  if (adminGoogleLoginButton) {
    adminGoogleLoginButton.hidden = enabled;
  }
}

function openAdminPanel() {
  if (!adminSection) {
    return;
  }

  adminSection.hidden = false;
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
    `${label} aberto. Depois cole a URL do projeto e clique em "Sincronizar URLs no portfolio".`,
  );
}

function setSyncFeedback(message) {
  if (syncUrlsFeedback) {
    syncUrlsFeedback.textContent = message;
  }
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

  const normalizedUrl = normalizeUrl(project.url || "");
  if (!normalizedUrl) {
    return "assets/logo_.jpg";
  }

  return `https://image.thum.io/get/width/1200/crop/700/noanimate/${encodeURI(normalizedUrl)}`;
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

function getSupabaseConfig() {
  const raw = localStorage.getItem(supabaseConfigKey);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (parsed.url && parsed.anonKey) {
      return parsed;
    }
  } catch {
    return null;
  }

  return null;
}

function saveSupabaseConfig(url, anonKey) {
  localStorage.setItem(supabaseConfigKey, JSON.stringify({ url, anonKey }));
}

async function connectSupabase(url, anonKey) {
  if (!window.supabase || !window.supabase.createClient) {
    setStatus("SDK do Supabase nao carregou.");
    return false;
  }

  try {
    supabaseClient = window.supabase.createClient(url, anonKey);

    const { error } = await supabaseClient
      .from("projects")
      .select("id", { count: "exact", head: true });

    if (error) {
      setStatus(`Falha ao conectar: ${error.message}`);
      supabaseClient = null;
      return false;
    }

    setStatus("Supabase conectado com sucesso.");
    return true;
  } catch {
    setStatus("Nao foi possivel conectar no Supabase.");
    supabaseClient = null;
    return false;
  }
}

async function refreshAdminSession() {
  if (!supabaseClient) {
    setAdminAccess(false);
    setAuthStatus("Conecte no Supabase para autenticar com Google.");
    return;
  }

  const {
    data: { session },
    error,
  } = await supabaseClient.auth.getSession();

  if (error || !session) {
    setAdminAccess(false);
    setAuthStatus("Faça login com Google para liberar o painel admin.");
    return;
  }

  const email = String(session.user?.email || "").toLowerCase();

  if (email !== ALLOWED_ADMIN_EMAIL) {
    await supabaseClient.auth.signOut();
    setAdminAccess(false);
    setAuthStatus(
      "Acesso negado: somente o email autorizado pode acessar o admin.",
    );
    return;
  }

  setAdminAccess(true);
  setAuthStatus(`Acesso liberado para ${email}.`);
}

async function loginWithGoogle() {
  if (!supabaseClient) {
    setAuthStatus("Conecte no Supabase antes de entrar com Google.");
    return;
  }

  const redirectTo = `${window.location.origin}${window.location.pathname}#admin`;
  await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo },
  });
}

async function logoutAdmin() {
  if (!supabaseClient) {
    return;
  }

  await supabaseClient.auth.signOut();
  setAdminAccess(false);
  setAuthStatus("Sessao encerrada.");
}

async function handleAdminLoginTrigger(event) {
  event.preventDefault();

  openAdminPanel();

  if (isAuthorizedAdmin) {
    return;
  }

  if (!supabaseClient) {
    const config = getSupabaseConfig();

    if (!config) {
      setAuthStatus(
        "Configure Supabase e autentique com Google para abrir o admin.",
      );
      return;
    }

    const connected = await connectSupabase(config.url, config.anonKey);
    if (!connected) {
      return;
    }
  }

  await loginWithGoogle();
}

function inferProjectTypeFromUrl(urlString) {
  const lower = urlString.toLowerCase();

  if (
    lower.includes("netlify") ||
    lower.includes("github.io") ||
    lower.includes("lovable")
  ) {
    return "Site Institucional";
  }

  if (lower.includes("shop") || lower.includes("store")) {
    return "E-commerce";
  }

  if (lower.includes("saas") || lower.includes("app.")) {
    return "Plataforma SaaS";
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

  return {
    name,
    type,
    description: `Projeto sincronizado de ${normalized}`,
    url: normalized,
    is_published: true,
  };
}

function buildDescriptionFromType(type) {
  const map = {
    "Landing Page": "Pagina focada em captacao de leads e conversao.",
    "Site Institucional":
      "Site institucional para apresentar a empresa com autoridade.",
    "E-commerce": "Loja virtual com vitrine, carrinho e checkout.",
    "Sistema Web": "Sistema para operacao interna com painel e controle.",
    "Plataforma SaaS": "Plataforma digital com area logada e assinaturas.",
    Marketplace: "Plataforma com multiplos vendedores e gestao central.",
  };

  return map[type] || "Projeto digital publicado no portfolio.";
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

  if (adminDescription && !adminDescription.value.trim()) {
    adminDescription.value = buildDescriptionFromType(
      adminType?.value || inferredType,
    );
  }

  if (adminCoverUrl && !adminCoverUrl.value.trim()) {
    adminCoverUrl.value = getProjectCoverUrl({ url: normalizedUrl });
  }

  adminFeedback.textContent =
    "Campos preenchidos automaticamente. Revise e publique.";
}

async function syncProjectsByUrls() {
  if (!isAuthorizedAdmin) {
    setSyncFeedback("Acesso bloqueado. Faça login admin para sincronizar.");
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

  if (supabaseClient) {
    const normalizedUrls = projects
      .map((project) => normalizeUrl(project.url))
      .filter(Boolean);

    let existing = [];
    if (normalizedUrls.length) {
      const { data } = await supabaseClient
        .from("projects")
        .select("url")
        .in("url", normalizedUrls);
      existing = Array.isArray(data) ? data : [];
    }

    const existingSet = new Set(
      existing.map((item) => normalizeUrl(item.url || "")),
    );

    const toInsert = projects.filter(
      (project) => !existingSet.has(normalizeUrl(project.url || "")),
    );

    if (!toInsert.length) {
      setSyncFeedback("Todas as URLs informadas ja existem no portfolio.");
      return;
    }

    const { error } = await supabaseClient.from("projects").insert(toInsert);

    if (error) {
      setSyncFeedback(`Erro na sincronizacao com Supabase: ${error.message}`);
      return;
    }

    await renderPortfolio();
    setSyncFeedback(
      `${toInsert.length} projeto(s) novo(s) sincronizado(s) com sucesso.`,
    );
    return;
  }

  const current = getStoredProjects();
  const merged = dedupeProjects([...projects, ...current]);
  const addedCount = Math.max(merged.length - current.length, 0);
  saveProjects(merged);
  await renderPortfolio();
  if (!addedCount) {
    setSyncFeedback("Todas as URLs informadas ja existem no portfolio local.");
    return;
  }

  setSyncFeedback(
    `${addedCount} projeto(s) novo(s) sincronizado(s) localmente.`,
  );
}

function createProjectCard(project) {
  const card = document.createElement("article");
  const cover = document.createElement("img");
  const content = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const actions = document.createElement("div");
  const viewButton = document.createElement(project.url ? "a" : "span");

  card.className = "project-card";
  content.className = "project-content";
  actions.className = "project-actions";
  cover.className = "project-cover";
  cover.loading = "lazy";
  cover.decoding = "async";
  cover.src = getProjectCoverUrl(project);
  cover.alt = `Capa do projeto ${project.name}`;

  title.textContent = project.name;
  description.textContent = `${project.type} • ${project.description}`;
  viewButton.className = "btn btn-sm btn-ghost project-link";
  viewButton.textContent = project.url ? "Ver projeto" : "Sem link";

  if (project.url) {
    viewButton.href = project.url;
    viewButton.target = "_blank";
    viewButton.rel = "noreferrer";
  } else {
    viewButton.setAttribute("aria-disabled", "true");
  }

  actions.appendChild(viewButton);
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(actions);
  card.appendChild(cover);
  card.appendChild(content);
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

  const duration = Math.max(20, originals.length * 6);
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
  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("projects")
      .select("name, type, description, url")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      renderPortfolioCards(
        attachStoredCovers(dedupeProjects([...defaultProjects, ...data])),
      );
      return;
    }
  }

  renderPortfolioCards(
    attachStoredCovers(
      dedupeProjects([...defaultProjects, ...getStoredProjects()]),
    ),
  );
}

function updateRecommendation() {
  if (!projectType || !projectGoal) {
    return;
  }

  const selectedType = projectType.value;
  const selectedGoal = projectGoal.value;

  if (!selectedType || !selectedGoal) {
    recommendTitle.textContent =
      "Selecione tipo e objetivo para ver recomendacao.";
    recommendText.textContent = "";
    recommendList.innerHTML = "";
    ctaWhatsapp.href = "https://wa.me/5541991443794";
    return;
  }

  const details = goalMap[selectedGoal];
  recommendTitle.textContent = `${details.title} com ${selectedType}`;
  recommendText.textContent = details.text;
  recommendList.innerHTML = details.tips
    .map((tip) => `<li>${tip}</li>`)
    .join("");

  const message = encodeURIComponent(
    `Ola, Vilarinho Tech! Quero recomendacao para ${selectedType} com objetivo de ${projectGoal.options[projectGoal.selectedIndex].text}.`,
  );
  ctaWhatsapp.href = `https://wa.me/5541991443794?text=${message}`;
}

async function handleAdminSubmit(event) {
  event.preventDefault();

  if (!isAuthorizedAdmin) {
    adminFeedback.textContent =
      "Acesso admin bloqueado. Entre com Google usando o email autorizado.";
    return;
  }

  const providedName = adminName.value.trim();
  const providedType = adminType.value.trim();
  const providedDescription = adminDescription.value.trim();
  const url = normalizeUrl(adminUrl.value.trim());
  const coverUrl = String(adminCoverUrl?.value || "").trim();

  const type = providedType || (url ? inferProjectTypeFromUrl(url) : "");
  const name = providedName || (url ? inferProjectNameFromUrl(url) : "");
  const description = providedDescription || buildDescriptionFromType(type);

  if (!name || !type || !description) {
    adminFeedback.textContent =
      "Informe ao menos a URL do projeto ou preencha nome, tipo e descricao.";
    return;
  }

  if (supabaseClient) {
    if (url) {
      const { data: existingByUrl } = await supabaseClient
        .from("projects")
        .select("id")
        .eq("url", url)
        .limit(1);

      if (Array.isArray(existingByUrl) && existingByUrl.length) {
        adminFeedback.textContent =
          "Este projeto ja existe no portfolio (URL duplicada).";
        return;
      }
    }

    const { error } = await supabaseClient.from("projects").insert({
      name,
      type,
      description,
      url,
      is_published: true,
    });

    if (error) {
      adminFeedback.textContent = `Erro ao salvar no Supabase: ${error.message}`;
      return;
    }

    saveProjectCover({ name, type, url }, coverUrl);
    await renderPortfolio();
    adminProjectForm.reset();
    adminFeedback.textContent =
      "Projeto publicado no Supabase e sincronizado no portfolio.";
    return;
  }

  const projects = getStoredProjects();
  const next = dedupeProjects([
    { name, type, description, url, coverUrl, is_published: true },
    ...projects,
  ]);

  if (next.length === projects.length) {
    adminFeedback.textContent =
      "Este projeto ja existe no portfolio local (duplicado).";
    return;
  }

  saveProjects(next);
  saveProjectCover({ name, type, url }, coverUrl);
  await renderPortfolio();

  adminProjectForm.reset();
  adminFeedback.textContent =
    "Projeto publicado localmente. Conecte o Supabase para sincronizar online.";
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

function setupInputRedirects() {
  const redirectInputs = document.querySelectorAll("input[data-redirect-url]");

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

async function setupSupabase() {
  if (window.location.hash === "#admin") {
    openAdminPanel();
  }

  const config = getSupabaseConfig();

  if (config) {
    if (supabaseUrlInput) {
      supabaseUrlInput.value = config.url;
    }
    if (supabaseAnonKeyInput) {
      supabaseAnonKeyInput.value = config.anonKey;
    }

    setStatus("Tentando reconectar no Supabase...");
    const connected = await connectSupabase(config.url, config.anonKey);
    if (connected) {
      await refreshAdminSession();
    }
  } else {
    setStatus("Modo local ativo. Configure Supabase para sincronizar online.");
    setAuthStatus("Conecte no Supabase para autenticar com Google.");
    setAdminAccess(false);
  }

  await renderPortfolio();
}

if (projectType && projectGoal) {
  projectType.addEventListener("change", updateRecommendation);
  projectGoal.addEventListener("change", updateRecommendation);
}

if (adminProjectForm) {
  adminProjectForm.addEventListener("submit", handleAdminSubmit);
}

if (supabaseConnectButton) {
  supabaseConnectButton.addEventListener("click", async () => {
    const url = supabaseUrlInput.value.trim();
    const anonKey = supabaseAnonKeyInput.value.trim();

    if (!url || !anonKey) {
      setStatus("Preencha Supabase URL e Anon Key.");
      return;
    }

    setStatus("Conectando...");
    const connected = await connectSupabase(url, anonKey);
    if (!connected) {
      return;
    }

    saveSupabaseConfig(url, anonKey);
    await refreshAdminSession();
    await renderPortfolio();
  });
}

if (adminGoogleLoginButton) {
  adminGoogleLoginButton.addEventListener("click", loginWithGoogle);
}

if (adminGoogleLogoutButton) {
  adminGoogleLogoutButton.addEventListener("click", logoutAdmin);
}

if (adminLoginTriggers.length) {
  adminLoginTriggers.forEach((link) => {
    link.addEventListener("click", handleAdminLoginTrigger);
  });
}

if (syncUrlsButton) {
  syncUrlsButton.addEventListener("click", syncProjectsByUrls);
}

if (adminAutofillUrlButton) {
  adminAutofillUrlButton.addEventListener("click", fillProjectFieldsFromUrl);
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
setupReveal();
setupInputRedirects();
setupSupabase();
