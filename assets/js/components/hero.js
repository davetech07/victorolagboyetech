export function HeroSection(data) {
  const metrics = data.metrics
    .map(
      (item) => `
            <li class="metric-card reveal">
                <p class="metric-value">${item.value}</p>
                <p class="metric-label">${item.label}</p>
            </li>
        `,
    )
    .join("");

  const signature = data.devSignature.lines
    .map((line) => `<li><code>${line}</code></li>`)
    .join("");

  return `
        <section id="home" class="hero layout-wrap" aria-labelledby="hero-title">
            <div class="hero-copy">
                <p class="section-kicker reveal">Portfolio 2026</p>
                <h1 id="hero-title" class="hero-title reveal">${data.name}</h1>
                <p class="hero-subtitle reveal">${data.role}</p>
                <p class="section-copy reveal">${data.intro}</p>
                <div class="dev-signature reveal" aria-label="Developer signature">
                    <p>${data.devSignature.title}</p>
                    <ul>${signature}</ul>
                </div>
                <div class="button-row reveal">
                    <a href="${data.cta.primary.href}" class="btn-primary" aria-label="${data.cta.primary.label}">${data.cta.primary.label}</a>
                    <a href="${data.cta.secondary.href}" class="btn-secondary" aria-label="${data.cta.secondary.label}">${data.cta.secondary.label}</a>
                </div>
            </div>

            <aside class="hero-panel reveal" aria-label="Profile highlight">
                <img src="image/victor.jpg" alt="Portrait of ${data.name}" class="profile-image" loading="lazy" />
                <p class="panel-copy">${data.highlight}</p>
                <ul class="metrics-grid" aria-label="Career highlights">
                    ${metrics}
                </ul>
            </aside>
        </section>
    `;
}
