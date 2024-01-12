// import React from "react";
// import { Formik, Form, Field } from "formik";

// function Login() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         padding: "0 20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {({ handleSubmit }) => (
//           <Form
//             style={{
//               maxWidth: "400px",
//               width: "100%",
//               padding: "20px",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//               backgroundColor: "#dcf2f0",
//               height: "300px",
//               marginBottom: "100px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//             }}
//             onSubmit={handleSubmit}
//           >
//             <div style={{ marginBottom: "20px" }}>
//               <label
//                 htmlFor="email"
//                 style={{
//                   marginBottom: "5px",
//                   display: "block",
//                   fontWeight: "bold",
//                 }}
//               >
//                 E-mail
//               </label>
//               <Field
//                 type="email"
//                 name="email"
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   borderRadius: "4px",
//                   border: "1px solid #ccc",
//                   boxSizing: "border-box",
//                 }}
//               />
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label
//                 htmlFor="password"
//                 style={{
//                   marginBottom: "5px",
//                   display: "block",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Password
//               </label>
//               <Field
//                 type="password"
//                 name="password"
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   borderRadius: "4px",
//                   border: "1px solid #ccc",
//                   boxSizing: "border-box",
//                 }}
//               />
//             </div>
//             <div style={{ textAlign: "center" }}>
//               <button
//                 type="submit"
//                 className="btn bg-primary"
//                 style={{
//                   padding: "8px 16px",
//                   borderRadius: "4px",
//                   border: "none",
//                   backgroundColor: "#007bff",
//                   color: "#fff",
//                   cursor: "pointer",
//                   width: "100%",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default Login;


import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {};

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email should be valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 character long"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px 40px",
              marginTop: "60px",
              borderRadius: "10px",
              boxShadow: "10px 5px #888",
              marginBottom: "40px",
              backgroundImage:"linear-gradient(to bottom right, #f8f9fa, #c3cfe2)"
              
            }}
          >
            <h2 className="text-center">Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email Address</label>
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <p className="text-center mt-3">
                      Don't have an account?Sign Up
                      <Link to="/Signup"> here</Link>
                    </p>

                    <div className="buttons text-center">
                      <button type="submit" className="btn btn-outline-dark px-4 py-2">
                        <Link to ="/Categories">Login</Link>
                        <i className="fa fa-sign-in me-1"></i>
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <br />
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
