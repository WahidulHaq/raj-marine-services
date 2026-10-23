import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us | P. S. Raj Shipping Enterprises, Mumbai",
      },
      {
        name: "description",
        content:
          "Contact P. S. Raj Shipping Enterprises in Sion Koliwada, Mumbai. Call +91 22 2415 7672 / +91 98 3399 7882 or email info@psrajshipping.com for marine repair, ship maintenance and manpower supply.",
      },
      {
        property: "og:title",
        content: "Contact Us | P. S. Raj Shipping Enterprises, Mumbai",
      },
      {
        property: "og:description",
        content:
          "Get in touch for marine repair, ship maintenance and skilled manpower supply. Based in Sion Koliwada, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactCards = [
  {
    title: "Visit Us",
    lines: [company.address],
  },
  {
    title: "Call Us",
    lines: [
      { label: company.landlineLabel, href: company.landlineHrefs[0] },
      { label: company.landlineLabel.split("/")[1]?.trim() ?? "", href: company.landlineHrefs[1] },
      { label: company.mobileLabel, href: company.mobileHref },
    ].filter((line) => line.label),
  },
  {
    title: "Email Us",
    lines: [
      { label: company.emailInfo, href: `mailto:${company.emailInfo}` },
      {
        label: company.emailSecondary,
        href: `mailto:${company.emailSecondary}`,
      },
    ],
  },
  {
    title: "Website",
    lines: [{ label: company.website, href: company.websiteHref }],
  },
] as const;

function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/60">
            P. S. Raj Shipping Enterprises
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            We undertake projects across ports, shipyards, dry docks,
            anchorages and offshore locations — reach out to discuss your
            requirement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <div className="h-1 w-8 bg-signal" aria-hidden="true" />
              <h2 className="mt-4 font-display text-lg font-bold">
                {card.title}
              </h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed">
                {card.lines.map((line) =>
                  typeof line === "string" ? (
                    <p key={line} className="text-muted-foreground">
                      {line}
                    </p>
                  ) : (
                    <p key={line.href} className="text-muted-foreground">
                      <a
                        href={line.href}
                        className="font-medium text-primary transition-colors hover:text-signal"
                      >
                        {line.label}
                      </a>
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Registration:</span>{" "}
            {company.licence}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-border shadow-sm">
          <iframe
            title="Map — P. S. Raj Shipping Enterprises, Sion Koliwada, Mumbai"
            src={company.mapEmbed}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
