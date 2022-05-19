import React from 'react';
import Image from "next/image"
import mainLogo from "../assets/fitwith.png"
import Link from 'next/link';

function Header() {
    return (
      <div className="flex bg-darkTeal">
        <div className="h-full w-full m-3">
            <Link href="/">
          <Image
            src={mainLogo}
            alt="logo"
            height="50px"
            width="50px"
            layout="intrinsic"
            objectFit="cover"
            quality="90"
            className="border rounded-lg"
          />
          </Link>
        </div>
      </div>
    );
}

export default Header;