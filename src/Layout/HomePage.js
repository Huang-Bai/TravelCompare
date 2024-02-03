import React from "react";
import SearchBar from "../Containers/SearchBar";
import Banner from "../Containers/Banner";
import HotItems from "../Containers/HotItems";

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="container">
        <Banner />
        <h3>熱門旅遊行程</h3>
        <p>最多旅客喜歡的行程，一起來看看吧!</p>
        <HotItems />
      </div>
    </>
  );
};
export default HomePage;
