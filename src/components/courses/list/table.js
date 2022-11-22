import React, { useState } from "react";
import Item from "./item";
import Pagination from "../../partials/pagination/pagination";
import { courses } from "../../../TestData/data";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [page, setPage] = useState(1);
  const navigation = useNavigate();
  const toCreate = () => {
    navigation("/courses/create");
  };
  return (
    <div className="col col-10 row">
      <div className="mb-2 p-0">
        <button className="btn btn-secondary " onClick={() => toCreate()}>
          +
        </button>
      </div>
      {courses.map((course) => (
        <Item course={course} />
      ))}
      <Pagination page={page} setPage={setPage} pages={5} />
    </div>
  );
};
export default Table;
