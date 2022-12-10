import React from "react";
import Item from "./item";

const Exercise = ({ nav }) => {
  const excercises = [
    { name: "First exercise" },
    { name: "Second exercise" },
    { name: "Third exercise" },
  ];
  return (
    <div
      className={
        nav === 2 ? "tab-pane fade show active" : "tab-pane fade show "
      }
      id="exercise"
      role="tabpanel"
      aria-labelledby="exercise-tab"
    >
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {excercises.map((excercise) => (
            <Item excercise={excercise} key={excercise.name} />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary btn-sm">
          Add exercise
        </button>
      </div>
    </div>
  );
};
export default Exercise;
