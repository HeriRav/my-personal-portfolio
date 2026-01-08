import { Header } from "@/src/components/header";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="h-px w-full bg-linear-to-r from-transparent via-dark-accent to-transparent my-6 mt-28 md:mt-20"></div>
      <div className="flex flex-col gap-4 px-4 md:px-32 max-w-337.5">
        {props.children}
      </div>
    </>
  );
}
