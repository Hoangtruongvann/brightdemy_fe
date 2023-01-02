import React, { useContext } from "react";
import AuthContext from "../../context/authContext";
import { blockUser } from "../../API/userAPI";

const Item = ({ user }) => {
  const context = useContext(AuthContext);
  const block = () => {
    blockUser(user.id);
  };
  return (
    <tr key={user.id} className="candidates-list">
      <td className="title">
        <div className="thumb"></div>
        <div className="candidate-list-details">
          <div className="candidate-list-info">
            <div className="candidate-list-title">
              <h5 className="mb-0">
                <span>{user.fullName}</span>
              </h5>
            </div>
            <div className="candidate-list-option">
              <ul className="list-unstyled">
                <li>{user.username}</li>
              </ul>
              <ul className="list-unstyled">
                <li>{user.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </td>
      <td className="candidate-list-favorite-time text-center">
        <span className="candidate-list-time order-1">
          <span className={user.status === 0 ? "text-success" : "text-danger"}>
            {user.status === 0 ? "Active" : "Blocked"}
          </span>
        </span>
      </td>
      <td>
        <ul className="list-unstyled mb-0 d-flex gap-2 justify-content-center text-center">
          <li>
            <span
              className="text-primary"
              data-toggle="tooltip"
              title=""
              data-original-title="view"
            >
              <i className="far fa-eye"></i>
            </span>
          </li>
          <li>
            <span
              href="#"
              className="text-info"
              data-toggle="tooltip"
              title=""
              data-original-title="Edit"
            >
              <i className="fas fa-pencil-alt"></i>
            </span>
          </li>
          <li>
            <span
              href="#"
              className="text-danger"
              data-toggle="tooltip"
              title=""
              data-original-title="Delete"
            >
              <i
                className="fa fa-ban"
                aria-hidden="true"
                onClick={() => block()}
              ></i>
            </span>
          </li>
        </ul>
      </td>
    </tr>
  );
};
export default Item;
