import React from "react";

const SearchBar = () => {
  return (
    <div className=".container py-5 d-flex justify-content-center">
      <form action="" method="POST">
        <label htmlFor="">目的地</label>
        <input id="" type="text" required />
        <label htmlFor="">出發地</label>
        <input type="text" required />
        <label htmlFor="">出發日期</label>
        <input type="text" required />
        <button type="submit">搜尋</button>
      </form>
    </div>
  );
};
export default SearchBar;
