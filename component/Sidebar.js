import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.svg"
import { linksLeftSidebar } from './data';




function Sidebar(props) {
const [image, setImage]= useState("")
useEffect(()=> {if(props.src){setImage(props.src)}}, [props.src])

    console.log("this is image passed", props.src)
    console.log("this is setting image",image)


const linkss= ["one", "two", "three"]
    return (
      <div className="w-64 border bg-teal py-4 px-6 min-h-full">
        <div className="flex p-1 justify-center items-center ">
          <Link href="/">
            <Image
              height={props.height}
              width={props.width}
              src={props.src}
              alt="logo"
              className="overflow-visible rounded-full"
            />
          </Link>
        </div>
        <div className="">
          {props.links.map((link, i) => (
            <div className="mt-10 text-center" key={i}>
              <Link href="/">
                <a>{link}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Sidebar;