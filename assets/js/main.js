import {
  portfolioData,
  skills,
  projects,
  contactLinks,
  contactForm,
} from "./data.js";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "./components/index.js";

const app = document.getElementById("app");
const primaryNav = document.getElementById("primary-nav");
const menuBtn = document.getElementById("menu-btn");
const yearElement = document.getElementById("year");
const themeToggle = document.getElementById("theme-toggle");

let lastFocusedDetailButton = null;

function getCurrentTheme() {
  const theme = document.documentElement.getAttribute("data-theme");
  return theme === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  const safeTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", safeTheme);
  localStorage.setItem("theme", safeTheme);

  if (themeToggle instanceof HTMLButtonElement) {
    const nextTheme = safeTheme === "dark" ? "light" : "dark";
    const icon = nextTheme === "dark" ? "☾" : "☀";
    const label = nextTheme === "dark" ? "Dark" : "Light";
    themeToggle.innerHTML = `
            <span class="theme-toggle-icon" aria-hidden="true">${icon}</span>
            <span class="theme-toggle-label">${label}</span>
        `;
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  }
}

function setupThemeToggle() {
  if (!(themeToggle instanceof HTMLButtonElement)) {
    return;
  }

  applyTheme(getCurrentTheme());

  themeToggle.addEventListener("click", () => {
    document.body.classList.add("theme-transition");
    const current = getCurrentTheme();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);

    window.setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 380);
  });
}

function renderPage() {
  if (!app) {
    return;
  }

  app.innerHTML = `
        ${HeroSection(portfolioData)}
        ${AboutSection(portfolioData, skills)}
        ${ProjectsSection(projects)}
        ${ContactSection(contactLinks, contactForm)}
    `;
}

function setupMobileMenu() {
  if (!menuBtn || !primaryNav) {
    return;
  }

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isExpanded));
    primaryNav.setAttribute("data-open", String(!isExpanded));
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      primaryNav.setAttribute("data-open", "false");
    });
  });
}

function setupSectionObserver() {
  const revealTargets = document.querySelectorAll(".reveal");
  const sectionTargets = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    },
  );

  revealTargets.forEach((target, index) => {
    const stagger = (index % 8) * 55;
    target.style.transitionDelay = `${stagger}ms`;
    revealObserver.observe(target);
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", isActive);
        });
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    },
  );

  sectionTargets.forEach((section) => navObserver.observe(section));
}

function updateYear() {
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !projectCards.length) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-filter");

      filterButtons.forEach((chip) => {
        chip.classList.toggle("active", chip === button);
      });

      projectCards.forEach((card) => {
        if (selected === "all") {
          card.classList.remove("is-hidden");
          return;
        }

        const stack = card.getAttribute("data-tech") || "";
        const matches = stack.split("|").includes(selected);
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

function setupProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeButton = document.getElementById("project-modal-close");
  const modalTitle = document.getElementById("project-modal-title");
  const modalMeta = document.getElementById("project-modal-meta");
  const modalImage = document.getElementById("project-modal-image");
  const modalDescription = document.getElementById("project-modal-description");
  const modalHighlights = document.getElementById("project-modal-highlights");
  const modalLive = document.getElementById("project-modal-live");
  const modalCode = document.getElementById("project-modal-code");
  const detailButtons = document.querySelectorAll(".project-detail-btn");

  if (!modal || !closeButton || !detailButtons.length) {
    return;
  }

  const projectMap = new Map(projects.map((project) => [project.id, project]));

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocusedDetailButton) {
      lastFocusedDetailButton.focus();
    }
  }

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.getAttribute("data-project-id");
      const project = projectMap.get(projectId);
      if (!project) {
        return;
      }

      lastFocusedDetailButton = button;
      modalTitle.textContent = project.title;
      modalMeta.textContent = `${project.year} • ${project.role}`;
      modalDescription.textContent = project.longDescription;
      modalImage.src = project.image;
      modalImage.alt = project.alt;
      modalLive.href = project.liveUrl;
      modalCode.href = project.codeUrl;

      modalHighlights.innerHTML = project.highlights
        .map((item) => `<li>${item}</li>`)
        .join("");

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.hasAttribute("data-modal-close")
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("contact-submit");
  const status = document.getElementById("contact-form-status");

  if (!(form instanceof HTMLFormElement) || !submitButton || !status) {
    return;
  }

  const fields = {
    name: {
      input: document.getElementById("contact-name"),
      error: document.getElementById("contact-name-error"),
      validate: (value) =>
        value.trim().length >= 2 || "Please enter at least 2 characters.",
    },
    email: {
      input: document.getElementById("contact-email"),
      error: document.getElementById("contact-email-error"),
      validate: (value) =>
        /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value) ||
        "Please enter a valid email address.",
    },
    message: {
      input: document.getElementById("contact-message"),
      error: document.getElementById("contact-message-error"),
      validate: (value) =>
        value.trim().length >= 20 ||
        "Share a little more detail (min 20 characters).",
    },
  };

  function renderFieldError(name, message) {
    const field = fields[name];
    if (
      !field ||
      !(field.error instanceof HTMLElement) ||
      !(field.input instanceof HTMLElement)
    ) {
      return;
    }

    field.error.textContent = message || "";
    field.input.classList.toggle("is-invalid", Boolean(message));
  }

  function validateForm() {
    let hasError = false;

    Object.entries(fields).forEach(([name, field]) => {
      if (
        !(
          field.input instanceof HTMLInputElement ||
          field.input instanceof HTMLTextAreaElement
        )
      ) {
        return;
      }

      const result = field.validate(field.input.value);
      if (result !== true) {
        hasError = true;
        renderFieldError(name, result);
      } else {
        renderFieldError(name, "");
      }
    });

    return !hasError;
  }

  Object.entries(fields).forEach(([name, field]) => {
    if (
      !(
        field.input instanceof HTMLInputElement ||
        field.input instanceof HTMLTextAreaElement
      )
    ) {
      return;
    }

    field.input.addEventListener("input", () => {
      const result = field.validate(field.input.value);
      renderFieldError(name, result === true ? "" : result);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.className = "contact-form-status";

    if (!validateForm()) {
      status.textContent = "Please fix the highlighted fields.";
      status.classList.add("error");
      return;
    }

    if (contactForm.endpoint.includes("your-form-id")) {
      status.textContent =
        "Add your Formspree form ID in data.js to enable live submission.";
      status.classList.add("error");
      return;
    }

    submitButton.setAttribute("disabled", "true");
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(contactForm.endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      form.reset();
      status.textContent = contactForm.successMessage;
      status.classList.add("success");
    } catch {
      status.textContent = contactForm.errorMessage;
      status.classList.add("error");
    } finally {
      submitButton.removeAttribute("disabled");
      submitButton.textContent = "Send message";
    }
  });
}

renderPage();
setupMobileMenu();
setupThemeToggle();
setupSectionObserver();
setupProjectFilters();
setupProjectModal();
setupContactForm();
updateYear();
