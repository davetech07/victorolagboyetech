import { sectionIntro, renderSocialLinks } from "./shared.js";

export function ContactSection(contactLinks, contactForm) {
    return `
        <section id="contact" class="section-wrap" aria-labelledby="contact-title">
            <div class="layout-wrap contact-shell">
                <div class="contact-card">
                    ${sectionIntro({
                        kicker: "Contact",
                        title: "Have an idea? Let us build it with clarity",
                        description:
                            "Open to freelance, full-time, and collaboration opportunities. Reach out with your product goals and timeline.",
                        titleId: "contact-title"
                    })}
                    <form id="contact-form" class="contact-form reveal" action="${contactForm.endpoint}" method="POST" novalidate>
                        <input type="hidden" name="_subject" value="New portfolio inquiry" />

                        <label for="contact-name">Name</label>
                        <input id="contact-name" name="name" type="text" autocomplete="name" required />
                        <p class="field-error" id="contact-name-error" aria-live="polite"></p>

                        <label for="contact-email">Email</label>
                        <input id="contact-email" name="email" type="email" autocomplete="email" required />
                        <p class="field-error" id="contact-email-error" aria-live="polite"></p>

                        <label for="contact-message">Project brief</label>
                        <textarea id="contact-message" name="message" rows="5" required></textarea>
                        <p class="field-error" id="contact-message-error" aria-live="polite"></p>

                        <button id="contact-submit" class="btn-primary" type="submit">Send message</button>
                        <p id="contact-form-status" class="contact-form-status" aria-live="polite"></p>
                    </form>
                </div>
                <div class="social-grid" aria-label="Social channels">
                    ${renderSocialLinks(contactLinks)}
                </div>
            </div>
        </section>
    `;
}
