import Link from "next/link";

type SectionItemProps = {
  title: string;
  subtitle: string;
  heading: string;
  href: string;
  icon: React.ElementType;
  description: string;
};

export default function SectionItem({
  title,
  subtitle,
  heading,
  href,
  icon: Icon,
  description,
}: SectionItemProps) {
  return (
    <div className="mb-6">
      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-1">
        <Link href={href} className="inline-flex flex-col w-fit group">
          <div className="inline-flex items-center gap-x-2">
            <Icon className="text-dark-accent border border-foreground p-1 size-8 rounded-full dark:text-foreground" />
            <div className="inline-flex flex-col text-sm">
              <p className="text-foreground font-medium">{title}</p>
              <p className="text-secondary dark:text-foreground">{subtitle}</p>
            </div>
          </div>
        </Link>

        <Link
          href={href}
          className="text-xl w-fit text-primary font-semibold hover:underline"
        >
          {heading}
        </Link>

        <p className="text-sm font-light line-clamp-3">{description}</p>
      </div>

      {/* Mobile */}
      <Link
        href={href}
        className="flex flex-col md:hidden group p-2 rounded-xl active:bg-accent"
      >
        <div className="inline-flex items-center gap-x-2">
          <Icon className="text-dark-accent border border-foreground p-1 size-8 rounded-full dark:text-foreground" />
          <div className="inline-flex flex-col text-sm">
            <p className="text-foreground font-medium">{title}</p>
            <p className="text-secondary dark:text-foreground line-clamp-1">
              {subtitle}
            </p>
          </div>
        </div>

        <p className="text-lg w-fit text-primary font-semibold py-1">
          {heading}
        </p>

        <p className="text-sm font-light line-clamp-3">{description}</p>
      </Link>
    </div>
  );
}
