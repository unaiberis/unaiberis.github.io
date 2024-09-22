import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../chunks/astro/server_CzV9r1kb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://unaiberis.github.io");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>About this sile</title>${renderHead()}</head> <body data-astro-cid-kh7btl4r> <header data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About This Site</h1> <nav data-astro-cid-kh7btl4r> <a href="/" data-astro-cid-kh7btl4r>Home</a> <a href="/about" data-astro-cid-kh7btl4r>About</a> </nav> </header> <main data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>About Astro</h2> <p data-astro-cid-kh7btl4r>
This is a simple webpage created using Astro. You can add more
				content here!
</p> <h3 data-astro-cid-kh7btl4r>Features</h3> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>Fast and lightweight</li> <li data-astro-cid-kh7btl4r>Markdown support for content</li> <li data-astro-cid-kh7btl4r>Customizable and flexible</li> </ul> </main> <footer data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} My Astro Site</p> </footer> </body></html>`;
}, "/home/avanzosc/nuclear-nebula/src/pages/about.astro", void 0);

const $$file = "/home/avanzosc/nuclear-nebula/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
