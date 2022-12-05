import React from "react";

const User = () => {
  return (
    <tr>
      <td>
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
        <a href="#" className="user-link">
          Mila Kunis
        </a>
        <span className="user-subhead">Admin</span>
      </td>
      <td>2013/08/08</td>
      <td className="text-center">
        <span className="label label-default text-danger bold">Inactive</span>
      </td>
      <td>
        <a href="#">mila@kunis.com</a>
      </td>
      <td style={{ width: "10%" }}>
        <a href="#" className="table-link">
          <span className="fa-stack">
            <i className="fa fa-square fa-stack-2x"></i>
            <i
              class="fa fa-list-alt fa-stack-1x fa-inverse"
              aria-hidden="true"
            ></i>
          </span>
        </a>
        <a href="#" className="table-link danger">
          <span className="fa-stack">
            <i className="fa fa-square fa-stack-2x"></i>
            <i
              class="fa fa-remove fa-stack-1x fa-inverse"
              aria-hidden="true"
            ></i>
          </span>
        </a>
      </td>
    </tr>
  );
};
export default User;
