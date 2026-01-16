import { Card, CardContent } from "@/src/components/ui/card";
import { JSX } from "react";

type SkillCardProps = {
  icon: JSX.Element;
  title: string;
  tech: string;
};

const SkillCard = ({ icon, title, tech }: SkillCardProps) => {
  return (
    <Card className="p-4 flex-1 hover:shadow-lg dark:hover:shadow-black transition-shadow">
      <div className="flex flex-col gap-y-4">
        {icon}

        <h1 className="text-lg font-semibold text-primary">{title}</h1>

        <p className="flex flex-wrap gap-2">
          {tech.split(",").map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-secondary/10 border border-secondary rounded-full text-sm text-foreground/80 cursor-default"
            >
              {t.trim()}
            </span>
          ))}
        </p>
      </div>

      <CardContent />
    </Card>
  );
};

export default SkillCard;
