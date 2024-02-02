import React from "react";

const SearchBar = () => {
  return (
    <div className=".container py-5 d-flex justify-content-center">
      <form action="" method="POST">
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">
            目的地
          </label>
          <input
            className="form-control form-control-lg"
            list="destinationList"
            name="destination"
            id="destination"
            type="text"
            required
          />
          <datalist id="destinationList">
            <option value="Japan" />
          </datalist>
        </div>
        <div className="mb-3">
          <label htmlFor="departure" className="form-label">
            出發地
          </label>
          <select
            name="departure"
            id="departure"
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
            required
          >
            <option></option>
            <option value="taipei">台北</option>
            <option value="taoyuan">桃園</option>
            <option value="taichung">台中</option>
            <option value="kaohsiung">高雄</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dateInput" className="form-label">
            出發日期
          </label>
          <input
            className="form-control form-control-lg"
            type="date"
            id="dateInput"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          搜尋
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
