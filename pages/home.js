import React from "react";
import Header from "../component/Header";
import Grid from "../component/Grid";
import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Sidebar from "../component/Sidebar";
import { linksLeftSidebar } from "../component/data";
import { linksRightSidebar } from "../component/data";
import thumbnail from "../assets/thumbnail.jpeg";
import logo1 from "../assets/fitwith1.png";

const prisma = new PrismaClient();

//Get all posts

const posts = await prisma.posts.findMany();

export async function getServerSideProps() {
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Home({ posts = [] }) {
  const [leftLinks, setLeftLinks] = useState(linksLeftSidebar);
  const [rightLinks, setRightLinks] = useState(linksRightSidebar);

  useEffect(() => setLeftLinks(linksLeftSidebar), []);
  useEffect(() => setRightLinks(linksRightSidebar), []);

  console.log("left links on main", leftLinks);

  return (
    <div className=" min-h-screen ">
      <Header />
      <div className="flex ">
        <div className="">
          <Sidebar height="60px" width="60px" src={logo1} links={leftLinks} />
        </div>
        <div className="w-full h-screen overflow-y-auto">
          <Grid posts={posts} />
        </div>
        <div>
          <Sidebar
            height="60x"
            width="60px"
            src={thumbnail}
            links={rightLinks}
          />
        </div>
      </div>
      {/* <footer className="bg-red-400">Footer</footer> */}
    </div>
  );
}
