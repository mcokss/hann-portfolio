import Link from "next/link";
import { SITE, NAV_LINKS, CONTACT } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const footerLinks = [
  ...NAV_LINKS,
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-od-id="footer"
      className="border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-[--content-max] px-[--container-px] py-12 sm:py-16">
        {/* ---- Columns ---- */}
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Link
              href="/"
              className="font-semibold text-fg tracking-[-0.01em] text-lg hover:text-accent transition-colors"
            >
              {SITE.name}
            </Link>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs">
              AI-powered Web Developer. I build fast, modern websites
              for businesses and entrepreneurs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono tracking-[0.1em] uppercase text-muted mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-fg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono tracking-[0.1em] uppercase text-muted mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-muted hover:text-fg transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hannchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg transition-colors"
                >
                  GitHub
                  <ExternalLink size={10} className="opacity-40" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-muted">
            &copy; {year} {SITE.name}
          </p>
          <p className="text-xs text-muted">
            Built with <span className="font-mono">Next.js</span> + AI
          </p>
        </div>
      </div>
    </footer>
  );
}
