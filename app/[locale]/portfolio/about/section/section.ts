import { getScopedI18n } from "@/locales/server";
import { UserSearch, FileUser, Cpu, Monitor, Contact } from "lucide-react";

export async function getSections() {
  const landingT = await getScopedI18n("landing.search_result");

  return [
    {
      id: "about",
      title: "Heri Rav Wiki",
      subtitle: "www.heritianaraveloson.dev > portfolio > about",
      heading: "Heritiana Raveloson",
      icon: UserSearch,
      href: "/portfolio/about",
      description: landingT("about.description"),
    },
    {
      id: "academy",
      title: "resume.io",
      subtitle: "www.heritianaraveloson.dev > portfolio > resume",
      heading: landingT("resume.title"),
      icon: FileUser,
      href: "/portfolio/resume",
      description: landingT("resume.description"),
    },
    {
      id: "skills",
      title: "tech.com",
      subtitle: "www.heritianaraveloson.dev > portfolio > skills",
      heading: landingT("skills.title"),
      icon: Cpu,
      href: "/portfolio/skills",
      description: landingT("skills.description"),
    },
    {
      id: "works",
      title: "Workflow",
      subtitle: "www.heritianaraveloson.dev > portfolio > works",
      heading: landingT("works.title"),
      icon: Monitor,
      href: "/portfolio/works",
      description: landingT("works.description"),
    },
    {
      id: "contact",
      title: "contact.me",
      subtitle: "www.heritianaraveloson.dev > portfolio > contact",
      heading: landingT("contact.title"),
      icon: Contact,
      href: "/portfolio/contact",
      description: landingT("contact.description"),
    },
  ];
}
