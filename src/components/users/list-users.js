import React from "react";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";
import { users } from "./user-data";

const ListUsers = () => {
  return (
    <>
      <Header />
      <div className="container mt-3 mb-4 vh-100">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">+ Thêm mới</button>
        </div>
        <div className="col-lg-9 mt-4 mt-lg-0 w-100">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Tên người dùng</th>
                      <th className="text-center">Trạng thái</th>
                      <th className="action text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="candidates-list">
                        <td className="title">
                          <div className="thumb"></div>
                          <div className="candidate-list-details">
                            <div className="candidate-list-info">
                              <div className="candidate-list-title">
                                <h5 className="mb-0">
                                  <span>{user.name}</span>
                                </h5>
                              </div>
                              <div className="candidate-list-option">
                                <ul className="list-unstyled">
                                  <li>Information Technology</li>
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
                            {user.status}
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
                                <i className="far fa-trash-alt"></i>
                              </span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListUsers;
