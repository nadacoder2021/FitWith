import React from 'react';
import Image from "next/image";
import pic from "../assets/flower.jpeg"
import dateFormat from 'dateformat';

function Card({
  postId = '',
  image = '',
  title = '',
  description = "",
  text = "",
  likes = "",
  createdAt="",
  videoUrl=""
  }) {

    console.log("this is image",image)
    return (
      <div className=" flex justify-center items-center relative">
        <div
          key={postId}
          className="  w-4/5 flex-column justify-center items-center mb-7 rounded-lg border border-black-800 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          {image ? (
            <div className="flex justify-center items-center  relative">
              <div className="h-full w-full"><Image
                src={image}
                alt={description}
                height={10}
                width={20}
                layout="responsive"
                objectFit="cover"
                quality= "90"
                className="p-2  border rounded"
              /></div>
            </div>
          ) : (
            <div className="" />
          )}
          {videoUrl ? (
            <div className="flex justify-center items-center">
              <iframe
              className=""
                width="553"
                height="280"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          ) : (
            <div className=" " />
          )}
          <div className="p-5 ">
            <a href="#">
              <h5 className="mb-2 flex justify-center items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title ?? "Title doesn't exist"}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {text}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {dateFormat(createdAt, "dddd, mmmm dS, yyyy")}
            </p>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 object-right-bottom py-2 px-4 rounded">
              {" "}
              Read more
            </button>
          </div>
        </div>
      </div>
    );
}

export default Card;
