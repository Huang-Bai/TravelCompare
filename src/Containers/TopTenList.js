import React, { useState, useEffect } from "react";
import axios from "axios";

const TopTenList = () => {
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 定义异步函数来获取数据
      try {
        const response = await axios.get(
          "https://www.travelcompare.store/itinerary/getIndexData"
        ); // 使用axios发送GET请求来获取数据
        setTopTen(response.data.user); // 将获取的数据更新到topTen状态中
      } catch (error) {
        console.error("Error fetching top ten list:", error); // 捕获并处理获取数据时可能发生的错误
      }
    };

    fetchData(); // 调用获取数据的函数
  }, []); // useEffect的第二个参数为空数组，表示仅在组件挂载时执行一次

  return (
    <div>
      <ul className="list-unstyled row">
        {topTen.map((item, index) => (
          <li key={index} className="col-lg-6 mb-3 mb-lg-4">
            <div className="card rounded border">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-img-overlay text-light ">
                    <p className="fs-3 fst-italic fw-bold">TOP {index + 1}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill m-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                    <span className="align-middle">
                      {item.favoriteCount}個喜歡
                    </span>
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="object-fit rounded-start"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text truncate-2-lines">{item.details}</p>
                    <div className="d-flex text-center list-unstyled align-items-center">
                      <div className="me-3">
                        <span className="fs-7 fw-bold">出發機場</span>
                        <span className="d-block">{item.originName}</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right me-3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                      <div className="me-5">
                        <span className="fs-7 fw-bold">目的地</span>
                        <span className="d-block">{item.countryName}</span>
                      </div>
                      <div className="border rounded-circle p-2">
                        <span className="fs-7 fw-bold">旅行社</span>
                        <hr className="p-0 m-0" />
                        <span className="d-block">{item.agencyName}</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer border-top-0 d-flex justify-content-between align-items-center">
                    <div>
                      {grabStartDate(item.startDate)}
                      {calculateDuration(item.startDate, item.endDate)}
                      <span className="me-3">
                        <span className="text-danger card-text fs-5 fw-bold">
                          {item.cost.toLocaleString()}
                        </span>
                        元
                      </span>
                    </div>
                    {formedJudg(item.formed)}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
const grabStartDate = (startDate) => {
  const start = new Date(startDate);
  const month = start.getMonth() + 1; // JavaScript 中月份是從 0 開始，所以要加 1
  const day = start.getDate();
  return (
    <span className="me-3 fs-7 text-muted">
      {month}月{day}日出發
    </span>
  );
};

// 計算日期間隔的函數
const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 將毫秒轉換為天數
  return (
    <span className="me-3">
      <span className="fs-5 fst-italic me-1">{diffDays}</span>天
      <span className="fs-5 fst-italic me-1">{diffDays - 1}</span>夜
    </span>
  ); // 根據天數計算夜晚數量
};

const formedJudg = (formed) => {
  const formedD = formed;
  if (formedD === true) {
    return (
      <small className="border rounded-pill border-danger py-1 px-2 text-danger fw-bold">
        已成團
      </small>
    );
  } else {
    return (
      <small className="border rounded-pill border-muted py-1 px-2 text-muted fw-bold">
        未成團
      </small>
    );
  }
};

export default TopTenList;
