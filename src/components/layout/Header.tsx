import { useLocation } from "react-router-dom";
import { useContent, useLocale } from "../../content/useContent";
import { localizePath } from "../../i18n/paths";
import { contactIcons } from "../icons/ContactIcons";
import ViewTransitionLink from "../motion/ViewTransitionLink";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const locale = useLocale();
  const { nav, contact } = useContent();
  const { pathname } = useLocation();
  const brandHref = locale === "pt" ? "/" : "/en";
  const email = contact.channels.find((c) => c.k === "Email");
  const linkedin = contact.channels.find((c) => c.k === "LinkedIn");
  const EmailIcon = contactIcons.Email;
  const LinkedInIcon = contactIcons.LinkedIn;

  return (
    <header id="top" className="site-header">
      <div className="container bar">
        <ViewTransitionLink className="brand" to={brandHref}>
          {nav.brand}
        </ViewTransitionLink>
        <nav>
          <ul className="nav-links">
            {nav.links.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-controls">
          <div className="header-social">
            {linkedin && (
              <a href={linkedin.href} target="_blank" rel="noreferrer noopener" aria-label={linkedin.k}>
                <LinkedInIcon />
              </a>
            )}
            {email && (
              <a href={email.href} aria-label={email.k}>
                <EmailIcon />
              </a>
            )}
          </div>
          <div className="lang-toggle">
            <ViewTransitionLink to={localizePath(pathname, "pt")} aria-current={locale === "pt" ? "true" : "false"}>
              PT
            </ViewTransitionLink>
            <span aria-hidden="true">·</span>
            <ViewTransitionLink to={localizePath(pathname, "en")} aria-current={locale === "en" ? "true" : "false"}>
              EN
            </ViewTransitionLink>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
