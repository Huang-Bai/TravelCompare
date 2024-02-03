import React from "react";
import { Link } from "react-router-dom";
import WebLogo from "../assets/svg/WebLogo.svg";

const LoginForm = () => {
  return (
    <div className="mx-auto">
      <img src={WebLogo} alt="" className="w-50 mb-3" />
      <p className="mb-1">立即登入，紀錄您的最愛行程，發表行程評價。</p>
      <p className="mb-5">祝您有個美好的假期。</p>
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
            登入
          </button>
        </div>
        <div className="col-12">
          <Link to="/TravelCompare/register">
            <button type="submit" className="btn btn-outline-primary col-12">
              立即註冊
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
