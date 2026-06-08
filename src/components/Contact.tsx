"use client";

import { useState } from "react";
import { contact, site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Intro + details */}
          <div>
            <Reveal>
              <span className="eyebrow gold-rule inline-block text-gold-deep">
                {contact.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
                {contact.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                {contact.lead}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="eyebrow text-gold-deep">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-lg text-ink transition-colors hover:text-gold-deep"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-gold-deep">Headquarters</dt>
                  <dd className="mt-1 text-lg text-ink">{site.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-gold-deep">Connect</dt>
                  <dd className="mt-2 flex gap-4">
                    {site.social.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="text-sm font-medium text-stone transition-colors hover:text-gold-deep"
                      >
                        {s.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-ink/10 bg-white/60 p-8 shadow-[var(--shadow-elev)] backdrop-blur-sm lg:p-10"
            >
              {sent ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-2xl text-gold-deep">
                    ✓
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-ink">
                    Thank you for reaching out.
                  </h3>
                  <p className="mt-2 text-stone">
                    A member of our team will respond shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Full name" name="name" type="text" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Organization" name="org" type="text" required={false} />
                  <div>
                    <label
                      htmlFor="message"
                      className="eyebrow text-gold-deep"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full resize-none rounded-lg border border-ink/15 bg-ivory/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-gold"
                      placeholder="How would you like to collaborate?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-ink-soft"
                  >
                    Send Message
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  <p className="text-center text-xs text-stone/70">
                    This is a demo form — connect it to your email service or
                    CRM to receive submissions.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required = true,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-gold-deep">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-ink/15 bg-ivory/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-gold"
      />
    </div>
  );
}
