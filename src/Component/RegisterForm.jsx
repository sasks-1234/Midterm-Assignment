// import { Field, Formik, Form, ErrorMessage } from "formik";
// import React from "react";
// import "../Style/RegisterForm.css";
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";

// const checked = yup.object().shape({
//   firstname: yup.string().required("Necessary to be filled"),
//   lastname: yup.string().required("Necessary to be filled"),
//   email: yup.string().email("Invalid email").required("Email is necessary to be filled"),
//   password: yup.string().required("Password is necessary to be filled"),
// });

// function RegisterForm() {
//   const navigate = useNavigate();
//   const initialValues = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     alert("Register Successfully");
//     navigate("/product", { replace: true }); // Use navigate with the option replace: true
//     setSubmitting(false); 
//   };

//   return (
//     <div className="form">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={checked}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <label htmlFor="firstname">First Name</label>
//               <Field
//                 type="text"
//                 placeholder="Enter your first name"
//                 name="firstname"
//               />
//               <ErrorMessage name="firstname" />
//             </div>
//             <div>
//               <label htmlFor="lastname">Last Name</label>
//               <Field
//                 type="text"
//                 placeholder="Enter your last name"
//                 name="lastname"
//               />
//               <ErrorMessage name="lastname" />
//             </div>
//             <div>
//               <label htmlFor="email">E-mail</label>
//               <Field type="email" placeholder="Enter your email" name="email" />
//               <ErrorMessage name="email" />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <Field
//                 type="password"
//                 placeholder="Enter your password"
//                 name="password"
//               />
//               <ErrorMessage name="password" />
//             </div>
//             <div>
//               <button className="submitButton" type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default RegisterForm;


import { useEffect, useState } from "react";

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";




const SignUpPage = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordconfirm: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name is required"),
    lastname: Yup.string().required("last name is required"),
    email: Yup.string()
      .required("emil is srequired")
      .email("email should be valid email"),

    password: Yup.string()
      .required("password is required")
      .min(6, "passwrd must be 6 character long"),
    passwordconfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,

    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
     
      <div className="row">
        <div className="col-md-3"></div>

        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "30px 40px",
              marginTop: "60px",
              borderRadius: "10px",
              boxShadow: "10px 5px #888",
              marginBottom: "40px",
              backgroundImage:"linear-gradient(to bottom right, #f8f9fa, #c3cfe2)"
            }}
          >
            <h2 className="text-center">Sign Up</h2>
            <hr />

            <form onSubmit={formik.handleSubmit}>
              {/* <h1>hello</h1> */}
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.firstname && formik.errors.firstname ? (
                  <small className="text-danger">
                    {formik.errors.firstname}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.lastname && formik.errors.lastname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.lastname && formik.errors.lastname ? (
                  <small className="text-danger">
                    {formik.errors.lastname}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password Confirm</label>
                <input
                  type="text"
                  name="passwordconfirm"
                  value={formik.values.passwordconfirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.passwordconfirm &&
                    formik.errors.passwordconfirm
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.passwordconfirm &&
                formik.errors.passwordconfirm ? (
                  <small className="text-danger">
                    {formik.errors.passwordconfirm}
                  </small>
                ) : null}
              </div>

              <p className="text-center mt-3">
                Already have an account?Login<Link to="/login"> here</Link>
              </p>

              <div className="buttons">
                <button className="btn">
                  <a href="/login" className="btn btn-outline-dark text-center">
                   Sign Up
                  </a>
                </button>
              </div>

              <br />
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
