import React from "react";
import SearchBar from "../Containers/SearchBar";
import Banner from "../Containers/Banner";
import TopTenList from "../Containers/TopTenList";

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="container">
        <Banner />
        <h3 className="fw-bold">十大旅遊行程</h3>
        <p>最多旅客喜歡的行程，一起來看看吧!</p>
        <TopTenList />
      </div>
    </>
  );
};
export default HomePage;
