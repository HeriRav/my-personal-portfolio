"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-1">
        <Link href="/portfolio" className="hover:underline">
          Home
        </Link>
        <p>&gt;</p>
        <Link href="/portfolio/resume" className="hover:underline">
          Resume
        </Link>
        <p>&gt; Professional</p>
      </div>
      Still in progress...
    </div>
  );
}
