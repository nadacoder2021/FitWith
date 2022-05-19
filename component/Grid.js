import React from "react";
import Card from "./Card";


function Grid({ posts = [] }) {
  console.log(posts)
   const isEmpty = posts.length === 0;

   //...

   return isEmpty ? (
     <p className="text-amber-700 bg-amber-100 px-4 rounded-md py-2 inline-flex items-center space-x-1">
       <span>Unfortunately, there is nothing to display yet.</span>
     </p>
   ) : (
     <div className=" flex-column">
       {posts.map((post) => (
         <Card posts={posts} key={posts.postId} {...post} />
       ))}
     </div>
   );
}

export default Grid;