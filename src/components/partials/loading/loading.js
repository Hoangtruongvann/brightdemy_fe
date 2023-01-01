import React from "react";

const Loading = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <img src="./loader.gif" alt="loading" className="img-loading" />
        <div className="loader-text">
          {" "}
          Đang tải, vui lòng chờ trong giây lát....
        </div>
      </div>
    </div>
  );
};

export default Loading;
