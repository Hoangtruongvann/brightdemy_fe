import React, { useState } from "react";
import { blockUser, activeUser } from "../../API/userAPI";
import DetailUserModal from "./detailUserModal";

const Item = ({ user }) => {
  const [status, setStatus] = useState(user.status === 0 ? true : false);
  const [showDetail, setShowDetail] = useState(false);
  const changeStatus = async () => {
    if (status) blockUser(user.id);
    else activeUser(user.id);
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
      <td className="candidate-list-favorite-time ">
        <span className="candidate-list-time order-1">
          <span class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id={"flexSwitchCheckChecked" + user.id}
              checked={status}
              onClick={(e) => {
                setStatus(!status);
                changeStatus();
              }}
            />
            <label
              class="form-check-label"
              htmlFor={"flexSwitchCheckChecked" + user.id}
            >
              <span className={status ? "text-success" : "text-danger"}>
                {status ? "Active" : "Blocked"}
              </span>
            </label>
          </span>
        </span>
      </td>
      <td>
        <ul className="list-unstyled mb-0 d-flex gap-2 justify-content-center text-center">
          <li onClick={() => setShowDetail(true)}>
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
            ></span>
          </li>
        </ul>
      </td>
      <DetailUserModal
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        user={user}
      />
    </tr>
  );
};
export default Item;
