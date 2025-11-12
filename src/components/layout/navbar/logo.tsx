import Link from "next/link";
import React from "react";

const LayoutLogo = () => {
  return (
    <Link href="/" className="flex items-center" title="Home">
      <span className="self-center text-xl font-semibold whitespace-nowrap">
        Company Logo
      </span>
    </Link>
  );
};

export default LayoutLogo;
