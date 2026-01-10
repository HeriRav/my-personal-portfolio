import {
  UserSearch,
  GraduationCap,
  Briefcase,
  Cpu,
  Monitor,
  Contact,
} from "lucide-react";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue.";

const sections = [
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
    title: "Academy",
    subtitle: "www.heritianaraveloson.dev > portfolio > resume > academic",
    heading: "Academic career",
    icon: GraduationCap,
    href: "/portfolio/resume/academic",
    description: lorem,
  },
  {
    id: "professional",
    title: "Professional",
    subtitle: "www.heritianaraveloson.dev > portfolio > resume > professional",
    heading: "Professional career",
    icon: Briefcase,
    href: "/portfolio/resume/professional",
    description: lorem,
  },
  {
    id: "skills",
    title: "Skills",
    subtitle: "www.heritianaraveloson.dev > portfolio > skills",
    heading: "Skills",
    icon: Cpu,
    href: "/portfolio/skills",
    description: lorem,
  },
  {
    id: "works",
    title: "Works",
    subtitle: "www.heritianaraveloson.dev > portfolio > works",
    heading: "Works",
    icon: Monitor,
    href: "/portfolio/works",
    description: lorem,
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "www.heritianaraveloson.dev > portfolio > contact",
    heading: "Contact",
    icon: Contact,
    href: "/portfolio/contact",
    description: lorem,
  },
];

export default sections;
