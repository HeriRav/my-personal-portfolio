import { Spinner } from "@/src/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner className="size-12" />
    </div>
  );
}
