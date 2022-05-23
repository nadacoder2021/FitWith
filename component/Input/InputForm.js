import React from "react";
import * as yup from "yup";
import { InputField, InputFile } from "./InputField";
import { Formik, Form } from "formik";

//Yup as validation
const ListingSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required(),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is a required field"),
  fileUpload: yup.mixed(),
  date: yup.date("enter date in valid form"),
});

//Initial values passed to Formik
const initialValues = {
  username: "",
  password: "",
  email: "",
  fileUpload: "",
  date: "",
};

//Values to be saved and displayed in console.log.
function handleOnSubmit(values) {
  const data = JSON.stringify(values, null, 2);
  console.log("These are values to submit to backend", data);
  alert(`Your username is ${values.username}
  Your email is ${values.email}
  The date is ${values.date}`);
}

function InputForm() {
  return (
    <div className="0  flex-col justify-center items-center w-2/3 m-9 p-3 border-black border-4">
      <div className="">
        {" "}
        <h1>Enter your details</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ListingSchema}
        onSubmit={handleOnSubmit}
      >
        <Form className="">
          <InputField
            className="p-2 border-black "
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <InputField
            className="p-2"
            label="Password"
            name="password"
            type="text"
            placeholder="Enter your password"
          />
          <InputField
            className="p-2"
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          <InputField
            className="p-2"
            label="Date"
            name="date"
            type="text"
            placeholder="DD/MM/YYYY"
          />
          <InputFile
            className="p-2"
            label="File"
            name="fileUpload"
            type="file"
            placeholder="Upload your file"
          />
          +
          <div className="">
            <button
              type="submit"
              className="bg-rose-600 text-white py-2 px-6 rounded-md focus:outline-none focus:ring-4 focus:ring-rose-600 focus:ring-opacity-50 hover:bg-rose-500 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default InputForm;
