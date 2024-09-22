import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, b as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzV9r1kb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://unaiberis.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/unaiberis.github.io/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/avanzosc/nuclear-nebula/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const data = {
    name: "Unai Beristain Aramendi",
    subtitle: "Full-Stack Odoo Developer",
    location: "<a href='https://www.google.com/maps/search/?api=1&query=Azkoitia,Gipuzkoa,Spain' target='_blank'>Azkoitia, Gipuzkoa, Spain</a>",
    github_url: "https://github.com/unaiberis",
    linkedin_url: "https://www.linkedin.com/in/unaiberis",
    profile: {
      Introduction: "Telecommunications graduate with experience as a full-stack developer at an Odoo partner. Skilled in Python, HTML, CSS, JavaScript, cybersecurity, SQL, and finance. Recently took the CFA Level I exam."
    },
    languages: [
      { language: "Basque", level: "C1 (EGA certificate)" },
      { language: "Spanish", level: "C1" },
      { language: "English", level: "C1 (Cambridge certificate)" },
      { language: "German", level: "B1" }
    ],
    experience: [
      {
        role: "Musician at Txalkor",
        company: "Txalkor Txistulari Taldea",
        url: "https://www.instagram.com/txalkortxistu/",
        years: "2008 \u2013 Present",
        details: [
          "Playing txistu since 2008",
          "Currently also playing txistu, danbolin, txirula, and pandero"
        ]
      },
      {
        role: "Internship at Tecnalia",
        company: "Tecnalia R&D",
        url: "https://www.tecnalia.com/",
        years: "2023 - 2024",
        details: [
          "Thesis about Vibration Monitoring"
        ]
      },
      {
        role: "Full-Time Job at AvanzOSC",
        company: "AvanzOSC",
        url: "https://www.avanzosc.es/",
        years: "2023 \u2013 Present",
        details: [
          "Odoo ERP Partner (Python and Frontend)",
          "Full-Stack Developer and Consultant"
        ]
      }
    ],
    education: [
      { title: "First and Secondary Education", institution: "Floreaga Salestar Ikastetxea", location: "Azkoitia, Gipuzkoa, Spain", year: "2003 - 2017" },
      { title: "High School", institution: "Azkoitia BHI", location: "Azkoitia, Gipuzkoa, Spain", year: "2017 - 2019" },
      { title: "Telecommunication Engineering", institution: "Euskal Herriko Unibertsitatea", location: "Bilbo, Bizkaia, Spain", year: "2019 - 2024" }
    ],
    interests: [
      { keyword: "Communications", description: "Effective messaging and information exchange" },
      { keyword: "Computer Science", description: "Technology and computing systems" },
      { keyword: "Cybersecurity", description: "Protecting systems from threats" },
      { keyword: "Healthy Lifestyle", description: "Physical and mental well-being" },
      { keyword: "Travel", description: "Exploring new places and different societies and cultures" }
    ],
    skills: {
      applications: "Microsoft Excel, Visual Studio, DBeaver, PhotoShop, Premiere",
      programming: "Python, JavaScript, SQL, Odoo, Linux, Bash",
      finance: "Stock investing (Value investing), Commodities, Company analysis and valuation, Bonds"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- Personal Info Section --> <section data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${data.name}</h1> <h2 data-astro-cid-j7pv25f6>${data.subtitle}</h2> <p data-astro-cid-j7pv25f6>📍 ${data.location}</p> <p data-astro-cid-j7pv25f6>📧 <a href="mailto:{data.email}" data-astro-cid-j7pv25f6>${data.email}</a></p> <p data-astro-cid-j7pv25f6>📞 ${data.contact}</p> <p data-astro-cid-j7pv25f6>GitHub: <a${addAttribute(data.github_url, "href")} data-astro-cid-j7pv25f6>${data.github_url}</a></p> <p data-astro-cid-j7pv25f6>LinkedIn: <a${addAttribute(data.linkedin_url, "href")} data-astro-cid-j7pv25f6>${data.linkedin_url}</a></p> </section> <!-- Introduction Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Introduction</h2> <p data-astro-cid-j7pv25f6>${data.profile.Introduction}</p> </section> <!-- What I Can Offer Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>What I Can Offer</h2> <ul data-astro-cid-j7pv25f6> ${data.profile.WhatICanOffer.map((offer) => renderTemplate`<li data-astro-cid-j7pv25f6>${offer}</li>`)} </ul> </section> <!-- What I Expect Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>What I Expect</h2> <ul data-astro-cid-j7pv25f6> ${data.profile.WhatIExpect.map((expect) => renderTemplate`<li data-astro-cid-j7pv25f6>${expect}</li>`)} </ul> </section> <!-- Languages Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Languages</h2> <ul data-astro-cid-j7pv25f6> ${data.languages.map((lang) => renderTemplate`<li data-astro-cid-j7pv25f6>${lang.language}: ${lang.level}</li>`)} </ul> </section> <!-- Experience Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Experience</h2> ${data.experience.map((exp) => renderTemplate`<div data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${exp.role} at <a${addAttribute(exp.url, "href")} data-astro-cid-j7pv25f6>${exp.company}</a> (${exp.years})</h3> <ul data-astro-cid-j7pv25f6> ${exp.details.map((detail) => renderTemplate`<li data-astro-cid-j7pv25f6>${detail}</li>`)} </ul> </div>`)} </section> <!-- Education Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Education</h2> ${data.education.map((edu) => renderTemplate`<div data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${edu.title} at <a${addAttribute(edu.url, "href")} data-astro-cid-j7pv25f6>${edu.institution}</a> (${edu.year})</h3> <p data-astro-cid-j7pv25f6>Location: ${edu.location}</p> </div>`)} </section> <!-- Interests Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Interests</h2> <ul data-astro-cid-j7pv25f6> ${data.interests.map((interest) => renderTemplate`<li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>${interest.keyword}</strong>: ${interest.description}</li>`)} </ul> </section> <!-- Skills Section --> <section data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Skills</h2> <p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Applications:</strong> ${data.skills.applications}</p> <p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Programming:</strong> ${data.skills.programming}</p> <p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Finance:</strong> ${data.skills.finance}</p> </section> </main>  ` })}`;
}, "/home/avanzosc/nuclear-nebula/src/pages/index.astro", void 0);

const $$file = "/home/avanzosc/nuclear-nebula/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
