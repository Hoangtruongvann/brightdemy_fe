import React, { useState } from "react";
import Item from "./item";
import Pagination from "../../partials/pagination/pagination";
import { useNavigate } from "react-router-dom";

const Table = ({ data, page, setPage }) => {
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
      {data.list && (
        <div className="table-course">
          {data.list.map((course) => (
            <Item course={course} />
          ))}
        </div>
      )}

      {data.pages > 1 && (
        <Pagination page={page} setPage={setPage} pages={data.pages} />
      )}
    </div>
  );
};
export default Table;
