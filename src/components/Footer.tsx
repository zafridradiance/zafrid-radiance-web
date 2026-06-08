import { footer, nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-parchment">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-tight text-parchment">
                {site.name}
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-frost/70">
              {footer.blurb}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="eyebrow text-frost">{col.heading}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-frost/70 transition-colors hover:text-parchment"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-frost/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-frost/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-frost/60 transition-colors hover:text-frost"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
