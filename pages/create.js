import React from "react";
import axios from "axios";
import PostForm
 from "../component/PostForm";


function Create() {
  const addPost = (data) => axios.post("/api/posts", data);

  return (
    <div className="flex justify-center items-center p-4 ">
      <div className="flex-col items-center m-9  w-3/5 shadow-md p-6 border-solid border-black border-2">
        <div className="mb-2 bg-teal-200 w-full flex justify-center items-center">
          <h1
            htmlFor="Write your post"
            className="text-lg text-gray-600 p-5 text-center"
          >
            Write a new post
          </h1>
        </div>
        <PostForm redirectPath="/" onSubmit={addPost} />
      </div>
    </div>
  );
}

export default Create;
