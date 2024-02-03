import React from "react";
import RegisterForm from "../Containers/RegisterForm";
import loginImg from "../assets/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg";
// import RegisterImg from "../assets/svg/undraw_aircraft_re_m05i.svg";

const RegisterPage = () => {
  return (
    <div className="container d-flex justify-content-between mt-5">
      <div className="d-none d-lg-block ">
        <img src={loginImg} className="loginImg d-block" alt="" />
      </div>
      <div className="ms-auto">
        <RegisterForm />
      </div>
    </div>
    // <div className="container mt-5">
    //   <div className="row g-5">
    //     <div className="col-12  col-md-6  col-lg-8 d-flex align-items-center justify-content-center">
    //       <img src={RegisterImg} alt="" className="img-fluid w-75" />
    //     </div>
    //     <div className="col-12  col-md-6 col-lg-4">
    //       <RegisterForm />
    //     </div>
    //   </div>
    // </div>
  );
};
export default RegisterPage;
