import Link from "next/link";
import React from "react";

interface NavItem {
  href: string;
  label: string;
}

interface PageNavigationProps {
  left?: NavItem;
  right?: NavItem;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ left, right }) => {
  return (
    <div className="flex items-center justify-between py-8 pb-20 md:pb-10 z-20">
      {/* Lien gauche */}
      {left ? (
        <Link
          href={left.href}
          className="text-lg font-semibold text-primary hover:scale-105 transition-all duration-150"
        >
          &larr; {left.label}
        </Link>
      ) : (
        <div />
      )}

      {/* Lien droit */}
      {right ? (
        <Link
          href={right.href}
          className="text-lg font-semibold text-primary hover:scale-105 transition-all duration-150"
        >
          {right.label} &rarr;
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default PageNavigation;
