import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services | P. S. Raj Shipping Enterprises",
      },
      {
        name: "description",
        content:
          "Chipping, sand blasting, grit/copper slag blasting, jet washing, hull cleaning, tank cleaning, painting, and skilled labour supply for tank cleaning and fabrication — across vessels, offshore platforms, shipyards and dry docks.",
      },
      {
        property: "og:title",
        content: "Services | P. S. Raj Shipping Enterprises",
      },
      {
        property: "og:description",
        content:
          "Complete marine services: chipping, blasting, jet washing, hull and tank cleaning, painting and skilled manpower supply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/60">
            P. S. Raj Shipping Enterprises
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Marine repair and ship maintenance services executed to
            specification — at ports, shipyards, dry docks, anchorages and
            offshore locations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl font-bold text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-bold leading-snug sm:text-2xl">
                  {service.title}
                </h2>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-harbor py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Discuss Your Next Project
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Tell us about your vessel, yard or offshore requirement — we will
            deploy the right team, tools and manpower to get the job done
            safely and on time.
          </p>
          <Link
            to="/contact"
            className="btn-base bg-signal text-signal-foreground hover:bg-signal-deep"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
