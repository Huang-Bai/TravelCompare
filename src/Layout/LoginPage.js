import React from "react";
import LoginForm from "../Containers/LoginForm";
import loginImg from "../assets/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg";

const LoginPage = () => {
  return (
    <div className="container mt-5 d-flex justify-content-between ">
      <div className="d-none d-lg-block ">
        <img src={loginImg} className="loginImg d-block" alt="" />
      </div>
      <div className="ms-auto">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
