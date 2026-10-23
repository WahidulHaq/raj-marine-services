import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us | P. S. Raj Shipping Enterprises",
      },
      {
        name: "description",
        content:
          "P. S. Raj Shipping Enterprises — an established marine repair and ship maintenance company in Mumbai with over 23 years of experience. ISO 9001:2015 and ABS certified. Our story, vision and certifications.",
      },
      {
        property: "og:title",
        content: "About Us | P. S. Raj Shipping Enterprises",
      },
      {
        property: "og:description",
        content:
          "Over 23 years of marine repair and ship maintenance experience from Mumbai. ISO 9001:2015 and ABS certified.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const certifications = [
  {
    title: "ISO 9001:2015",
    body: "Quality management system certification through an ANAB-accredited certification body, reflecting structured and professional working practices.",
  },
  {
    title: "ABS Quality Evaluations",
    body: "Management system certification from ABS Quality Evaluations, Inc. — a mark of reliability trusted across the marine industry.",
  },
  {
    title: "National Safety Council — Green Triangle",
    body: "Recognised for safety, underlining our commitment to safe working practices on every project.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-primary-foreground/60">
            P. S. Raj Shipping Enterprises
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            With experience you can trust and a commitment you can rely on.
          </p>
        </div>
      </section>

      {/* About text */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="h-1 w-16 bg-signal" aria-hidden="true" />
        <p className="mt-8 text-lg leading-relaxed text-foreground">
          <strong>P. S. Raj Shipping Enterprises</strong> is an established and
          professionally managed marine repair and ship maintenance company
          with over <strong>23 years of industry experience</strong>. Based in
          Mumbai, we provide reliable marine repair, ship maintenance, tank
          cleaning, surface preparation, painting, and skilled manpower
          solutions to the shipping and offshore industries.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          With a strong understanding of the demanding requirements of the
          marine sector, we undertake projects across ports, shipyards, dry
          docks, anchorages, and offshore locations. Our experienced workforce
          and practical expertise enable us to execute projects efficiently
          while maintaining high standards of{" "}
          <strong>quality, safety, workmanship, and timely completion</strong>.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Our core services include{" "}
          <strong>
            tank cleaning, hull cleaning, chipping, painting, high-pressure and
            low-pressure jet washing, hydro blasting, grit/copper slag
            blasting, surface preparation, tank coating, stencil/name painting,
            and skilled manpower supply
          </strong>
          . We also provide experienced marine personnel including{" "}
          <strong>
            Chief Engineers, Technical Superintendents, Mechanical Engineers,
            supervisors, skilled workers, and other project manpower
          </strong>{" "}
          as per client requirements.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          We are <strong>ISO 9001:2015 and ABS certified</strong>, reflecting
          our commitment to structured quality management and professional
          working practices. Our experience includes working with leading
          shipping and offshore organizations, and we have successfully
          executed projects at major Indian ports and maritime facilities.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          At P. S. Raj Shipping Enterprises, we believe that every project is
          built on <strong>trust, responsibility, quality, and performance</strong>.
          Our objective is not simply to complete a job, but to become a
          dependable long-term service partner for our clients.
        </p>
        <blockquote className="mt-10 border-l-4 border-signal bg-card p-6 font-display text-lg italic leading-relaxed text-foreground">
          With experience you can trust and a commitment you can rely on, we
          continue to deliver marine solutions that keep vessels, operations,
          and projects moving forward.
        </blockquote>
      </section>

      {/* Certifications */}
      <section className="bg-harbor py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="eyebrow text-signal">Certified &amp; Recognised</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Our Certifications
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="h-1 w-8 bg-signal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cert.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <p className="eyebrow text-signal">Looking Ahead</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Our Vision
          </h2>
        </div>
        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            To become a{" "}
            <strong>trusted and preferred marine service partner</strong> in
            India and beyond by delivering dependable, high-quality, and
            cost-effective solutions to the shipping, shipyard, offshore, and
            marine industries.
          </p>
          <p>
            We envision building a company recognized for{" "}
            <strong>
              professionalism, safety, quality workmanship, skilled manpower,
              timely execution, and long-term client relationships
            </strong>
            .
          </p>
          <p>
            Our vision is to continuously improve our capabilities, adopt
            better work practices and technologies, develop our people, and
            deliver solutions that meet the evolving needs of the maritime
            industry.
          </p>
        </div>
        <blockquote className="mt-10 text-center font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
          "Our goal is simple — to set a higher standard in marine services
          through quality, commitment, and trust."
        </blockquote>
      </section>
    </>
  );
}
