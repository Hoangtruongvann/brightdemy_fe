import React from "react";

const CourseDescriptions = ({ course }) => {
  return (
    <div
      className="jumbotron mb-4 pt-3 "
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        borderBottom: "1px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col col-8">
            <h1>{course.name}</h1>
            <h5>
              Created by <a href="">owner</a>
            </h5>
            <p>{course.descriptions}</p>
            <span>
              <span>• Training time --------- </span>
              <span>• Created at --------- </span>
              <span>• Last updated --------- </span>
            </span>
            <p className="mt-4">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Register
              </a>
            </p>
          </div>
          <div className="col col-4 d-flex align-items-center">
            <img
              src="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
              alt=""
              srcSet=""
              style={{ height: "200px", width: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDescriptions;
