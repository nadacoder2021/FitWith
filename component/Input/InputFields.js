import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";


export function InputField({ label, ...props }){
  const [field, meta] = useField(props);
  return (
    <div className=" flex-col m-2 p-3">
      
        <label className="p-2" htmlFor={props.id || props.name}>
          {label}
        </label>
        <div>
        <input className="text-input" {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export function InputFile({ label, ...props }){
  const [field, meta] = useField(props);
  return (
    <div className="  m-2 p-3 flex-col">
      <label
        className="p-2"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className=""
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};


 export function SelectField({ label, ...props }) {
   const [field, meta] = useField(props);
   return (
     <div>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
