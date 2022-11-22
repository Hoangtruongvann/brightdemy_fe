import React from "react";

const Item = ({ excercise }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{excercise.name}</td>
      <td>30 mins</td>
      <td>
        <button
          type="button"
          className="btn btn-success btn-sm"
          ata-toggle="tooltip"
          data-placement="top"
          title="Solve again"
        >
          Solved
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm">
          View submissions
        </button>
      </td>
    </tr>
  );
};
export default Item;
