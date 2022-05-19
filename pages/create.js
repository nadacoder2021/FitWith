import React from "react";
import axios from "axios";
import PostForm
 from "../component/PostForm";


function Create() {
  const addPost = (data) => axios.post("/api/posts", data);

  return (
    <div className="flex justify-center items-center m-9 content-center max-w-lg shadow-md">
      <div className="mb-2">
        <h1
          htmlFor="Write your post"
          className="text-lg text-gray-600 p-5 text-center"
        >
          Write a new post
        </h1>
      </div>
      <PostForm redirectPath="/" onSubmit={addPost} />
    </div>
  );
}

export default Create;
