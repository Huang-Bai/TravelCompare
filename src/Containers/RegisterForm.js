import React from "react";
import { Link } from "react-router-dom";
import WebLogo from "../assets/svg/WebLogo.svg";

const LoginForm = () => {
  return (
    <div className="mx-auto">
      <img src={WebLogo} alt="" className="w-50 mb-3" />
      <p className="mb-5">註冊享受完整服務</p>
      <form action="" className="row g-4">
        <div className="col-12">
          <label htmlFor="" className="form-label fw-bolder">
            帳號
          </label>
          <input type="text" className="form-control mb-3" />

          <label htmlFor="" className="form-label fw-bolder">
            密碼
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary col-12">
            註冊
          </button>
        </div>
        <div className="col-12">
          <Link to="/TravelCompare/login">
            <button type="submit" className="btn btn-outline-primary col-12">
              已有帳號
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
