import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-drydock.jpg";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "P. S. Raj Shipping Enterprises | Marine Repair & Ship Maintenance, Mumbai",
      },
      {
        name: "description",
        content:
          "23+ years of marine repair, ship maintenance, tank cleaning, blasting, painting and skilled manpower supply across Indian ports, shipyards and offshore locations. ISO 9001:2015 & ABS certified.",
      },
      {
        property: "og:title",
        content:
          "P. S. Raj Shipping Enterprises | Marine Repair & Ship Maintenance, Mumbai",
      },
      {
        property: "og:description",
        content:
          "Over 23 years of marine repair, ship maintenance and skilled manpower solutions. ISO 9001:2015 & ABS certified, based in Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "23+", label: "Years of Experience" },
  { value: "10+", label: "Core Marine Services" },
  { value: "ISO & ABS", label: "Certified Quality" },
  { value: "Mumbai", label: "Ports · Shipyards · Offshore" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Workers maintaining a ship's hull in dry dock at sunrise"
          className="h-[560px] w-full object-cover sm:h-[640px]"
          width={1920}
          height={900}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 py-16">
            <p className="eyebrow text-signal-foreground">
              ISO 9001:2015 · ABS Certified · Mumbai, India
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Marine Repair &amp; Ship Maintenance You Can Rely On
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Tank cleaning, hull cleaning, chipping, blasting, painting and
              skilled manpower — delivered with quality, safety and timely
              completion across ports, shipyards, dry docks and offshore
              locations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="btn-base bg-signal text-signal-foreground hover:bg-signal-deep"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="btn-base border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-3xl font-bold text-signal">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-signal">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A Trusted Marine Service Partner Since Over Two Decades
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              P. S. Raj Shipping Enterprises is an established and
              professionally managed marine repair and ship maintenance company
              based in Mumbai. We serve the shipping and offshore industries
              with reliable repair, maintenance, tank cleaning, surface
              preparation, painting and skilled manpower solutions.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every project is built on trust, responsibility, quality and
              performance — executed by an experienced workforce at major
              Indian ports and maritime facilities.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:text-signal"
            >
              Read more about us →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Certified Quality",
                body: "ISO 9001:2015 and ABS certified, reflecting structured quality management and professional working practices.",
              },
              {
                title: "Experienced Workforce",
                body: "Chief Engineers, superintendents, supervisors and skilled workers deployed as per client requirements.",
              },
              {
                title: "Safety First",
                body: "National Safety Council Green Triangle — a commitment to safe working on every job.",
              },
              {
                title: "Timely Completion",
                body: "Efficient execution at ports, shipyards, dry docks, anchorages and offshore locations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="h-1 w-8 bg-signal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-harbor py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="eyebrow text-signal">What We Do</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From chipping and blasting to tank cleaning and manpower supply —
              complete marine services, executed to specification.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to="/services"
                className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-display text-sm font-bold text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-signal">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="btn-base bg-primary text-primary-foreground hover:bg-navy-deep"
            >
              View All Services in Detail
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Need experienced marine manpower or ship maintenance?
          </h2>
          <p className="max-w-2xl text-primary-foreground/80">
            With experience you can trust and a commitment you can rely on, we
            deliver marine solutions that keep vessels, operations and projects
            moving forward.
          </p>
          <Link
            to="/contact"
            className="btn-base bg-signal text-signal-foreground hover:bg-signal-deep"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
