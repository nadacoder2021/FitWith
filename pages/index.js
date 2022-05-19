import React from "react";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import bodyImage from "../assets/main.jpeg";
import logo from "../assets/fitwith.png";

export default function Landing() {
  return (
    <div className=" h-screen flex bg-main bg-cover ">
      <div className="bg-black rounded-md flow-root m-5 p-9 h-3/5 text-center">
        <div className=" rounded-md mb-9 flex content-center justify-center w-fit h-fit">
          <Image
            src={logo}
            alt="logo"
            height="250px"
            width="250px"
            layout="intrinsic"
            className="flex"
          ></Image>
        </div>
        <div className="m-8">
          <Link href="/home">
            <a className="text-black bg-white p-3 hover:bg-sky-700 rounded-lg">
              Go to HomePage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
