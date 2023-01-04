import React from "react";
import { useNavigate } from "react-router-dom";

const CourseDescriptions = ({ course }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="jumbotron mb-4 pt-3  c-des "
      style={{
        backgroundColor: "rgb(233, 233, 233)",
        borderBottom: "1px",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col col-8">
            <h1>{course.name}</h1>
            {/* <h5>
               <a href="">owner</a>
            </h5> */}
            <p>{course.description}</p>
            <span>
              <span>Starts at: {course.openTme} </span>
            </span>
            <p className="mt-4">
              <a className="btn btn-primary btn-md" href="#" role="button">
                Đăng kí
              </a>
              <a
                className="btn btn-secondary btn-md ml-5  "
                role="button"
                onClick={() => navigate("/Courses/QA/" + course.id)}
              >
                Hỏi đáp
              </a>
              <a
                className="btn btn-secondary btn-md ml-5  "
                role="button"
                onClick={() => navigate("/Courses/users/" + course.id)}
              >
                Học viên
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
