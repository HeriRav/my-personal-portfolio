type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative my-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-light-grey" />

      <div className="flex flex-col gap-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`relative flex lg:flex-row ${
                isLeft ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              <div
                className={`lg:w-1/2 px-4 ${isLeft ? "lg:pr-12" : "lg:pl-12"}`}
              >
                <div className="bg-dark-grey border border-primary-hover p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-primary italic">
                    {item.title}
                  </h3>
                  <p className="text-secondary italic">{item.subtitle}</p>
                  <p className="text-sm text-gray-400 italic mb-2">
                    {item.period}
                  </p>
                  <p className="text-light-grey">{item.description}</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-grey" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
