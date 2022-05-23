import React from "react";
import Link from "next/link";
import Image from "next/image";
import fitWith from "../assets/fitwithC.png";
import fitWith1 from "../assets/fitwith1.png";
import { Canvas } from "@react-three/fiber";
import Three from "../component/Three";
import { OrbitControls } from "@react-three/drei";
import SphereAnimation from "../component/Three";

export default function Landing() {
  return (
    <div className=" h-screen flex bg-main bg-cover lg:w-screen md:w-screen">
      <div className="bg rounded-md  m-5 p-9 h-3/5 text-center">
        <div className=" md:flex-shrink-0 rounded-md mb-9 w-fit h-fit">
          <div className="m-8">
            <Image
              src={fitWith1}
              alt="logo"
              height="150px"
              width="150px"
              layout="intrinsic"
              className="bg-black rounded-full"
            ></Image>
          </div>
          
        </div>
        <div className="m-8">
          <Link href="/home">
            <a className="text-black bg-white p-3 hover:bg-teal rounded-lg">
              Go to HomePage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
