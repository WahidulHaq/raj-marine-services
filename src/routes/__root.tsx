import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { company } from "@/lib/company";
import emblem from "@/assets/psraj-emblem.png";
import mumbaiPort from "@/assets/mumbai-port-authority.jpg";
import greenTriangle from "@/assets/green-triangle-safety.png";

const navItems = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About Us", exact: false },
  { to: "/services", label: "Services", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="h-1 w-full bg-signal" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={emblem}
            alt="P. S. Raj Shipping Enterprises emblem"
            className="h-12 w-auto"
            width={48}
            height={54}
          />
          <span className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight text-primary sm:text-lg">
              P. S. Raj Shipping Enterprises
            </span>
            <span className="eyebrow text-[10px] text-muted-foreground">
              {company.tagline}
            </span>
          </span>
        </Link>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <img
            src={mumbaiPort}
            alt="Mumbai Port Authority"
            title="Mumbai Port Authority"
            className="h-10 w-auto rounded-full sm:h-12"
            width={48}
            height={48}
            loading="lazy"
          />
          <img
            src={greenTriangle}
            alt="National Safety Council — Green Triangle for Safety · Safety Zone"
            title="National Safety Council — Green Triangle for Safety · Safety Zone"
            className="h-10 w-auto sm:h-12"
            width={48}
            height={48}
            loading="lazy"
          />
        </div>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-signal"
                  }
                >
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={emblem}
              alt=""
              aria-hidden="true"
              className="h-14 w-auto"
              width={56}
              height={64}
              loading="lazy"
            />
            <p className="font-display text-base font-bold leading-snug">
              P. S. Raj Shipping Enterprises
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Over 23 years of marine repair, ship maintenance and skilled
            manpower solutions across ports, shipyards, dry docks and offshore
            locations.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/85 transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Certifications</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li>ISO 9001:2015 Certified</li>
            <li>ABS Quality Evaluations Certified</li>
            <li>National Safety Council — Green Triangle for Safety</li>
            <li className="pt-2 text-xs text-primary-foreground/60">
              {company.licence}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li>{company.address}</li>
            <li>
              <a href={company.landline1Href} className="hover:text-signal">
                {company.landline1}
              </a>
              {" · "}
              <a href={company.landline2Href} className="hover:text-signal">
                {company.landline2}
              </a>
              <br />
              <a href={company.mobileHref} className="hover:text-signal">
                {company.mobileLabel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.emailInfo}`}
                className="hover:text-signal"
              >
                {company.emailInfo}
              </a>
            </li>
            <li>
              <a
                href={company.websiteHref}
                className="hover:text-signal"
              >
                {company.website}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} P. S. Raj Shipping Enterprises · Mumbai,
        India
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-base bg-signal text-signal-foreground hover:bg-signal-deep"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-base bg-signal text-signal-foreground hover:bg-signal-deep"
          >
            Try again
          </button>
          <a href="/" className="btn-base border border-border bg-background hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
