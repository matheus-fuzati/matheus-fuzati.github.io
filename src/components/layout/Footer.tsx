import { useContent } from "../../content/useContent";

export default function Footer() {
  const { footer } = useContent();

  return (
    <footer className="site-footer">
      <div className="container bar">
        <span>{footer.rights}</span>
        <a href="#top">↑ Top</a>
      </div>
    </footer>
  );
}
