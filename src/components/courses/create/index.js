import React from "react";
import Header from "../../partials/header/header";
import Footer from "../../partials/footer/footer";
import Form from "./form";

const Create = () => {
  return (
    <div>
      <Header navID={2} />
      <div>
        <div id="create-courses" className="h-100">
          <div className="section-content">
            <h1 className="section-header">
              Bắt đầu{" "}
              <span
                className="content-header wow fadeIn "
                data-wow-delay="0.2s"
                data-wow-duration="2s"
              >
                {" "}
                Tạo mới một khóa học
              </span>
            </h1>
          </div>
          <Form/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Create;
