import React from "react";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import Input from "./Input.js"

// Prop-types will check props passed to your components against those definitions, and warn in development if they don't match.

const ListingSchema = yup.object().shape({
  image: yup.string(),
  title: yup.string().trim().required(),
  description: yup.string().trim(),
  text: yup.string(),
  likes: yup.number().positive().integer().min(0),
});

function PostForm({
  initialValues = null,
  redirectPath = "",
  onSubmit = () => null,
}) {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialValues?.image ?? "");

  const { image, ...initialFormValues } = initialValues ?? {
    image: "",
    title: "",
    description: "",
    text: "",
    likes: 0,
  };

   const handleOnSubmit = async (values = null) => {
     let toastId;
     try {
       setDisabled(true);
       toastId = toast.loading("Submitting...");
       // Submit data
       if (typeof onSubmit === "function") {
         await onSubmit({ ...values, image: imageUrl });
       }
       toast.success("Successfully submitted", { id: toastId });
       // Redirect user
       if (redirectPath) {
         router.push(redirectPath);
       }
     } catch (e) {
       toast.error("Unable to submit", { id: toastId });
       setDisabled(false);
     }
   };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={ListingSchema}
        validateOnBlur={false}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="space-y-8">
            <div className="space-y-6">
              <Input
                name="title"
                type="text"
                label="Title"
                placeholder="Entire rental unit - Amsterdam"
                disabled={disabled}
              />

              <Input
                name="description"
                type="textarea"
                label="Description"
                placeholder="Very charming and modern apartment in Amsterdam..."
                disabled={disabled}
                rows={5}
              />

              <Input
                name="price"
                type="number"
                min="0"
                label="Price per night"
                placeholder="100"
                disabled={disabled}
              />

              <div className="flex space-x-4">
                <Input
                  name="guests"
                  type="number"
                  min="0"
                  label="Guests"
                  placeholder="2"
                  disabled={disabled}
                />
                <Input
                  name="beds"
                  type="number"
                  min="0"
                  label="Beds"
                  placeholder="1"
                  disabled={disabled}
                />
                <Input
                  name="baths"
                  type="number"
                  min="0"
                  label="Baths"
                  placeholder="1"
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={disabled || !isValid}
                className="bg-rose-600 text-white py-2 px-6 rounded-md focus:outline-none focus:ring-4 focus:ring-rose-600 focus:ring-opacity-50 hover:bg-rose-500 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-600"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostForm;

//         <div>

//   <form action="" className="w-full p-4"></form>
// <div>
//             <input
//               type="text"
//               id="small-input"
//               className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//               placeholder="Title of your post"
//             ></input>
//           </div>
//           <textarea
//             className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//             name="post"
//             placeholder="Write your post"
//           ></textarea>
//           <div className="flex justify-center mt-8">
//             <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
//               <div className="m-4">
//                 <label className="inline-block mb-2 text-gray-500">
//                   Upload Image(jpg,png,svg,jpeg)
//                 </label>
//                 <div className="flex items-center justify-center w-full">
//                   <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
//                     <div className="flex flex-col items-center justify-center pt-7">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
//                         Select a photo
//                       </p>
//                     </div>
//                     <input type="file" className="opacity-0" />
//                   </label>
//                 </div>
//               </div>
//               <div className="flex p-2 space-x-4">
//                 <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">
//                   Cannel
//                 </button>
//                 <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">
//                   Create
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={addPost}
//           redirectPath="/"
//           className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
//         >
//           Post
//         </button>
//       </form>
//         </div>
//     );
