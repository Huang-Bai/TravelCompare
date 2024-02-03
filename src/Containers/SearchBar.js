import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div class="bd-blue-800 mb-5">
      <h2 className="container pt-4 pb-2 text-light fw-bolder">
        搜尋您的最佳旅行
      </h2>
      <div className="container pb-4 pb-md-5">
        <form
          action=""
          method="POST"
          className="row gy-2 gy-md-3 gx-md-2 w-100"
        >
          <div className="form-floating col-12 col-md w-100">
            <input
              className="form-control"
              list="destinationList"
              name="destination"
              id="destination"
              type="text"
              placeholder="目的地"
              required
            />
            <label htmlFor="destination" className="floatingInput ms-2">
              目的地
            </label>
            <datalist id="destinationList">
              <option value="日本" />
              <option value="韓國" />
              <option value="越南" />
            </datalist>
          </div>
          <div className="form-floating col-12 col-md w-100">
            <select
              name="departure"
              id="departure"
              class="form-select"
              aria-label="Large select example"
              type="text"
              placeholder="出發地"
              required
            >
              <option></option>
              <option value="taipei">台北</option>
              <option value="taoyuan">桃園</option>
              <option value="taichung">台中</option>
              <option value="kaohsiung">高雄</option>
            </select>
            <label htmlFor="departure" className="floatingInput ms-2">
              出發地
            </label>
          </div>
          <div className="form-floating mb-3 mb-md-0 col-12 col-md w-100">
            <input
              className="form-control"
              type="date"
              id="dateInput"
              placeholder="出發日期"
              required
            />
            <label htmlFor="dateInput" className="form-floatingInput ms-2">
              出發日期
            </label>
          </div>
          <div className="col-12 col-md-2">
            <button type="submit" className="btn btn-primary w-100 searchBtn">
              搜尋
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
