import React from "react";

const Item = ({ quiz }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{quiz.name}</td>
      <td>90 mins</td>
      <td>
        <button
          type="button"
          className="btn btn-success btn-sm"
          data-toggle="tooltip"
          data-placement="top"
          title="Solve again"
        >
          Solved
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm">
          Export results
        </button>
      </td>
    </tr>
  );
};
export default Item;
