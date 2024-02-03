import React from "react";
import "./Banner.css";
import img1 from "../image/luca-bravo-O453M2Liufs-unsplash_s.jpg";
import img2 from "../image/jake-blucker-tMzCrBkM99Y-unsplash_s.jpg";
import img3 from "../image/dino-reichmuth-A5rCN8626Ck-unsplash_s.jpg";

const Banner = () => {
  return (
    <div id="carouselHomeBanner" className="carousel slide mb-5">
      {/* 目前位置標記 */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselHomeBanner"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselHomeBanner"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselHomeBanner"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      {/* 幻燈片內容 */}
      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5 className="fs-1 fw-bolder">完美行程就找 Travel Compare</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1 fw-bolder">篩選出您的最佳行程</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1 fw-bolder">何時何地，隨時準備出發</h5>
          </div>
        </div>
      </div>
      {/* 左右按鈕 */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHomeBanner"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHomeBanner"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Banner;
