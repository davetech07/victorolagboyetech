import { sectionIntro, renderSkillPills } from "./shared.js";

export function AboutSection(data, skills) {
    return `
        <section id="about" class="section-wrap" aria-labelledby="about-title">
            <div class="layout-wrap section-grid">
                <div>
                    ${sectionIntro({
                        kicker: "About",
                        title: "Design-minded development, built for real users",
                        description: data.about,
                        titleId: "about-title"
                    })}
                </div>
                <div class="about-card reveal">
                    <h3 class="about-title">Core stack</h3>
                    <ul class="skills-list" aria-label="Core skills">
                        ${renderSkillPills(skills)}
                    </ul>
                </div>
            </div>
        </section>
    `;
}
