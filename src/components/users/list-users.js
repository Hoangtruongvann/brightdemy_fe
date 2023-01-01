import React, { useEffect, useState } from "react";
import Item from "./item";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";

import { getAllUsers } from "../../API/userAPI";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };
  useEffect(() => {
    getData();
  }, []);
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
                      <Item user={user} />
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
