import { getI18n } from "@/locales/server";
import Link from "next/link";

const Timeline = ({
  items = [],
  isAcademic = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  isAcademic?: boolean;
}) => (
  <div className="relative my-12">
    {/* Ligne verticale */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-light-grey" />

    <div className="flex flex-col gap-16">
      {items.map((item, i) => {
        const isLeft = i % 2 === 0;

        return (
          <div
            key={i}
            className={`relative flex flex-col lg:flex-row ${
              isLeft ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div
              className={`lg:w-1/2 px-4 ${
                isLeft ? "lg:pr-12 text-left" : "lg:pl-12 text-left"
              }`}
            >
              <div className="bg-dark-grey border border-primary-hover shadow-lg p-6 rounded-lg hover:scale-105 transition-all duration-300">
                {isAcademic ? (
                  <>
                    <h3 className="text-2xl font-bold text-primary! italic">
                      {item.title}
                    </h3>
                    <p className="text-secondary! italic">{item.degree}</p>
                    <p className="text-sm text-gray-400! italic mb-2">
                      {item.start_date} – {item.end_date}
                    </p>
                    <p className="text-light-grey!">{item.description}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-primary! italic">
                      {item.title}
                    </h3>
                    <p className="text-light-grey!">{item.job}</p>
                    <p className="text-sm text-gray-400! italic mb-2">
                      <span className="text-secondary!">{item.contract}</span> •{" "}
                      {item.start_date} – {item.end_date}
                    </p>
                    <p
                      className="text-light-grey!"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Point central */}
            <div className="hidden lg:flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-grey shadow-md" />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default async function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex text-lg text-foreground font-semibold gap-x-1 py-4">
        <Link href="/portfolio" className="hover:underline">
          Home
        </Link>
        <Link href="/portfolio/resume" className="hover:underline">
          &gt; Resume
        </Link>
        <p>&gt; Academic</p>
      </div>
    </div>
  );
}
