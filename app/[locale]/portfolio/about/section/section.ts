import { getScopedI18n } from "@/locales/server";
import { UserSearch, FileUser, Cpu, Monitor, Contact } from "lucide-react";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue.";

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
      description: lorem,
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
      description: lorem,
    },
    {
      id: "contact",
      title: "contact.me",
      subtitle: "www.heritianaraveloson.dev > portfolio > contact",
      heading: landingT("contact.title"),
      icon: Contact,
      href: "/portfolio/contact",
      description: lorem,
    },
  ];
}
