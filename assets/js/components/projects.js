import { sectionIntro } from "./shared.js";

function renderFilters(projects) {
    const tags = [...new Set(projects.flatMap((project) => project.tech))];
    const filterButtons = tags
        .map(
            (tag) => `
            <button type="button" class="filter-chip" data-filter="${tag}" aria-label="Filter projects by ${tag}">
                ${tag}
            </button>
        `
        )
        .join("");

    return `
        <div class="filters-wrap reveal" role="toolbar" aria-label="Project filters">
            <button type="button" class="filter-chip active" data-filter="all" aria-label="Show all projects">All</button>
            ${filterButtons}
        </div>
    `;
}

function renderProjectCards(projects) {
    return projects
        .map(
            (project) => `
            <article class="project-card reveal" data-tech="${project.tech.join("|")}" aria-label="Project ${project.title}">
                <img src="${project.image}" alt="${project.alt}" loading="lazy" />
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <ul class="tech-stack" aria-label="Tech stack for ${project.title}">
                        ${project.tech.map((tech) => `<li class="tech-pill">${tech}</li>`).join("")}
                    </ul>
                    <div class="project-links">
                        <button type="button" class="project-link project-detail-btn" data-project-id="${project.id}" aria-label="Open details for ${project.title}">Details</button>
                        <a class="project-link" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open live project for ${project.title}">Live</a>
                        <a class="project-link" href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open source code for ${project.title}">Code</a>
                    </div>
                </div>
            </article>
        `
        )
        .join("");
}

function renderProjectModal() {
    return `
        <div id="project-modal" class="project-modal" aria-hidden="true">
            <div class="project-modal-backdrop" data-modal-close="true"></div>
            <div class="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
                <button type="button" class="modal-close" id="project-modal-close" aria-label="Close project details">Close</button>
                <img id="project-modal-image" class="modal-image" src="" alt="" loading="lazy" />
                <p id="project-modal-meta" class="modal-meta"></p>
                <h3 id="project-modal-title" class="modal-title"></h3>
                <p id="project-modal-description" class="modal-description"></p>
                <ul id="project-modal-highlights" class="modal-highlights"></ul>
                <div class="modal-actions">
                    <a id="project-modal-live" class="btn-primary" href="#" target="_blank" rel="noopener noreferrer">View live</a>
                    <a id="project-modal-code" class="btn-secondary" href="#" target="_blank" rel="noopener noreferrer">View code</a>
                </div>
            </div>
        </div>
    `;
}

export function ProjectsSection(projects) {
    return `
        <section id="projects" class="section-wrap" aria-labelledby="projects-title">
            <div class="layout-wrap">
                ${sectionIntro({
                    kicker: "Projects",
                    title: "Selected projects",
                    description:
                        "Filter by stack, inspect implementation details, and explore how each product was shaped from concept to delivery.",
                    titleId: "projects-title"
                })}
                ${renderFilters(projects)}
                <div class="project-grid">
                    ${renderProjectCards(projects)}
                </div>
            </div>
            ${renderProjectModal()}
        </section>
    `;
}
