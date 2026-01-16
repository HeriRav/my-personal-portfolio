"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-1">
        <Link href="/portfolio" className="hover:underline">
          Home
        </Link>
        <p>&gt; Works</p>
      </div>
      Still in progress...
    </div>
  );
}
