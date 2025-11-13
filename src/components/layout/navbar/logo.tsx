import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/pitsWithBg.jpg";

const LayoutLogo = () => {
  return (
    <Link href="/" className="flex items-center" title="Home">
      <Image
        src={Logo}
        alt="Logo"
        width={40}
        height={40}
        className="w-[90px] h-auto"
        quality={100}
        priority
      />
    </Link>
  );
};

export default LayoutLogo;
