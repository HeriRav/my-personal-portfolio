import { useScopedI18n } from "@/locales/client";
import AgeCalculator from "../age/age-calculator";

type PersonalInfoItem = {
  label: string;
  value: React.ReactNode;
};

export default function PersonalInfo() {
  const landingT = useScopedI18n("landing.about");

  const personalInfos: PersonalInfoItem[] = [
    {
      label: landingT("date_place"),
      value: (
        <>
          {landingT("month")} (Age:&nbsp;
          <AgeCalculator birthDate="1997-11-27" />
          ), Ankadifotsy, Antananarivo 101, Analamanga, Madagascar
        </>
      ),
    },
    {
      label: landingT("university"),
      value: landingT("university_name"),
    },
    {
      label: landingT("location"),
      value: "Antananarivo 103, Madagascar",
    },
    {
      label: landingT("Email"),
      value: (
        <a
          href="mailto:heriravel00@gmail.com"
          className="text-primary hover:underline transition-all duration-150"
        >
          heriravel00@gmail.com
        </a>
      ),
    },
    {
      label: landingT("phone"),
      value: (
        <a
          href="tel:+261347776896"
          className="text-primary hover:underline transition-all duration-150"
        >
          +261 34 77 768 96
        </a>
      ),
    },
  ];
  return (
    <div className="py-2">
      {personalInfos.map((info) => (
        <div key={info.label} className="text-sm py-1">
          <p className="font-semibold">
            <span className="text-foreground">{info.label}</span>
            <span className="font-light pl-1">{info.value}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
