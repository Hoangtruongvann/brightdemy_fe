import React, { useContext } from "react";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";
import AuthContext from "../../context/authContext";

const Profile = () => {
  const context = useContext(AuthContext);
  return (
    <>
      <Header navID={2} />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 vh-100">
          {context.user && (
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h5 className="my-3">{context.user.fullName}</h5>
                    <p className="text-muted mb-1">{context.role.name}</p>
                    <p className="text-muted mb-4">
                      Nguyen Van Cu, Quan 5, TPHCM
                    </p>
                    {/* <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Theo dõi
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Nhắn tin
                    </button>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Họ và tên</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {context.user.fullName}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{context.user.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Số điện thoại</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5678</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Địa chỉ</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Nguyen Van Cu, Quan 5, TPHCM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
