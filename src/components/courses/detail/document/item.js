import React from "react";

const Item = ({ document }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{document.name}</td>
      <td>1mbs</td>
      <td>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4208/4208397.png"
          alt=""
          srcSet=""
          style={{
            height: "24px",
            width: "24px",
            marginBottom: "4px",
          }}
        />
      </td>
    </tr>
  );
};
export default Item;
