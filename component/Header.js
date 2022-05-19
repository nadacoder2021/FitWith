import React from 'react';
import Image from "next/image"
import mainLogo from "../assets/fitwith.png"
import Link from 'next/link';

function Header() {
    return (
      <div className="flex bg-black">
        <div className="flex space-x-5 h-full w-full m-3">
          <Link href="/">
            <Image
              src={mainLogo}
              alt="logo"
              height="50px"
              width="50px"
              layout="intrinsic"
              objectFit="cover"
              quality="90"
              className="border  cursor-pointer rounded-lg"
            />
          </Link>
          <div>
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            ></input>
          </div>
        </div>
      </div>
    );
}

export default Header;