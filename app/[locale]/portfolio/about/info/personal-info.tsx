import AgeCalculator from "../age/age-calculator";

type PersonalInfoItem = {
  label: string;
  value: React.ReactNode;
};

const personalInfos: PersonalInfoItem[] = [
  {
    label: "Date/Place of birth :",
    value: (
      <>
        27 Novembre 1997 (Age:&nbsp;
        <AgeCalculator birthDate="1997-11-27" />
        ), Ankadifotsy, Antananarivo 101, Analamanga, Madagascar
      </>
    ),
  },
  {
    label: "University :",
    value: "Regional University Space of the Indian Ocean (EUROI)",
  },
  {
    label: "Localization :",
    value: "Antananarivo 103, Madagascar",
  },
  {
    label: "Email :",
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
    label: "Phone number :",
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

export default function PersonalInfo() {
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
