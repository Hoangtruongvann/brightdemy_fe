import React from "react";
import Item from "./item";

const Document = ({ nav }) => {
  const documents = [
    { name: "Introduce" },
    { name: "Hello world" },
    { name: "Set up" },
  ];
  return (
    <div
      className={
        nav === 1 ? "tab-pane fade show active" : "tab-pane fade show "
      }
      id="document"
      role="tabpanel"
      aria-labelledby="document-tab"
    >
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col-1">#</th>
            <th scope="col-3">Tên</th>
            <th scope="col-5">Mô tả</th>
            <th scope="col-2">Kích thước</th>
            <th scope="col-2">Tải xuống</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <Item document={document} key={document.name} />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary btn-sm">
          Tài liệu mới
        </button>
      </div>
    </div>
  );
};
export default Document;
