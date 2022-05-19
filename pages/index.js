import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import bodyImage from "../assets/main.jpeg";
import logo from "../assets/fitwith.png"

export default function Landing() {
  return (
    <div className=" h-screen ">
      <div>
        <Image 
        src={bodyImage} 
        alt="landingpage"
        layout="fill">
        </Image>
      </div>
      <div className="">
        <Image
        src={logo}
        alt="logo"
        height="200px"
        width="200px"
        layout="intrinsic">
        </Image>
      </div>
      <div> 
      <Link href="/home">
        <a className="text-white bg-black">Go to HomePage</a>
      </Link>
      </div>
     
    </div>
  );
}
