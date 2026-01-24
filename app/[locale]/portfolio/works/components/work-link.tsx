import { Download, Github, Globe } from "lucide-react";

type WorkLinkProps = {
  href: string;
  label: string;
  download?: boolean;
};

function renderLinkIcon(href: string, download?: boolean) {
  if (download) return <Download size={16} />;
  if (href.includes("github.com")) return <Github size={16} />;
  return <Globe size={16} />;
}

export default function WorkLink({ href, label, download }: WorkLinkProps) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download}
      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition"
    >
      {renderLinkIcon(href, download)}
      {label}
    </a>
  );
}
