import { contact, site } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="paper-grain relative bg-parchment py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <span className="eyebrow brand-rule inline-block text-glacier">
          {contact.eyebrow}
        </span>
        <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-[-0.015em] text-ink sm:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {contact.lead}
        </p>

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="eyebrow text-glacier">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-lg text-ink transition-colors hover:text-glacier"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-glacier">Connect</dt>
            <dd className="mt-2 flex gap-4">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-glacier"
                >
                  {s.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
