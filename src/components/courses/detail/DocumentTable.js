import React from "react";

const DocumentTable = () => {
  return (
    <div className="container-fluid w-75 mb-5">
      <div className="row">
        <div className="col">
          <h5>Course documents</h5>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <span>File name</span>
                <span>Video</span>
                <span>3 days ago</span>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <span>File name</span>
                <span>Video</span>
                <span>3 days ago</span>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <span>File name</span>
                <span>pdf</span>
                <span>3 days ago</span>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <span>File name</span>
                <span>Quiz</span>
                <span>3 days ago</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DocumentTable;
