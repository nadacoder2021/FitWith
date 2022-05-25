import React from 'react';
import Image from "next/image"
import mainLogo from "../assets/fitwith.png"
import Link from 'next/link';
import {SidebarMobile} from "../component/Sidebar"
import { linksLeftSidebar, linksRightSidebar } from "./data";
import logo1 from "../assets/fitwith1.png"
import thumbnail from "../assets/thumbnail.jpeg"

function Header() {
    return (
      <div className="flex bg-black max-h-20 ">
        <div className="overflow:hidden p-6 z-10 visible sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden min-h-fit">
            <SidebarMobile
              height="60px"
              width="60px"
              src={logo1}
              links={linksLeftSidebar}
            />
          </div>
        <div className="flex justify-center items-center space-x-5 h-full w-full m-3">
          
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

          <div className="flex justify-center items-center">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            ></input>
          </div>
        </div>
        <div className="overflow:hidden p-6 z-10 visible sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden min-h-fit">
          <SidebarMobile
            height="60px"
            width="60px"
            src={thumbnail}
            links={linksRightSidebar}
          />
        </div>
      </div>
    );
}

export default Header;