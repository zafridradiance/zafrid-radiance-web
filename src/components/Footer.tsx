import { footer, nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60">
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="font-serif text-xl tracking-wide text-ivory">
                {site.name}
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-mist/80">
              {footer.blurb}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="eyebrow text-gold-light">{col.heading}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-mist/80 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-mist/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-mist/70 transition-colors hover:text-gold-light"
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
