export function sectionIntro({ kicker, title, description, titleId }) {
  return `
        <p class="section-kicker reveal">${kicker}</p>
        <h2 id="${titleId}" class="section-title reveal">${title}</h2>
        <p class="section-copy reveal">${description}</p>
    `;
}

export function renderSkillPills(items, className = "skill-pill") {
  return items
    .map((item) => `<li class="${className} reveal">${item}</li>`)
    .join("");
}

export function renderSocialLinks(links) {
  return links
    .map(
      (link) => `
            <a class="social-link reveal" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="Open ${link.label}">
                <span>${link.label}</span>
                <span aria-hidden="true">${link.handle}</span>
            </a>
        `,
    )
    .join("");
}
