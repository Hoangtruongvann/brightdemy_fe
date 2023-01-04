import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ course }) => {
  const navigation = useNavigate();
  const detail = (id) => {
    navigation("/courses/detail/" + id);
  };
  return (
    <div className="card mb-3 " onClick={() => detail(course.id)}>
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src="https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424"
            className="img-fluid rounded-start h-100 pt-2 pb-2"
            alt="img"
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            {/* <p> Created by ...
               <a href="">{course.ownerName}</a>
            </p> */}
            <p>{course.description}</p>
            <small className="text-muted">Last modified: {course.modifiedDate.toString().slice(0,10)}</small>
            <p className="card-text">
              <small className="text-muted">Starts at: {course.openTime.toString().slice(0,10)}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
