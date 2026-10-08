import { useLocation } from "react-router-dom";
import { useContent, useLocale } from "../../content/useContent";
import { localizePath } from "../../i18n/paths";
import ViewTransitionLink from "../motion/ViewTransitionLink";

export default function Header() {
  const locale = useLocale();
  const { nav } = useContent();
  const { pathname } = useLocation();
  const brandHref = locale === "pt" ? "/" : "/en";

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
        <div className="lang-toggle">
          <ViewTransitionLink to={localizePath(pathname, "pt")} aria-current={locale === "pt" ? "true" : "false"}>
            PT
          </ViewTransitionLink>
          <span aria-hidden="true">·</span>
          <ViewTransitionLink to={localizePath(pathname, "en")} aria-current={locale === "en" ? "true" : "false"}>
            EN
          </ViewTransitionLink>
        </div>
      </div>
    </header>
  );
}
