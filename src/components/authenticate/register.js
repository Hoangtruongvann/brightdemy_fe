import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../partials/header/header";
import Footer from "../partials/footer/footer";
import { register } from "../../API/authenAPI";

const Register = () => {
  const negative = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  //Submit form sigup
  const submit = async () => {
    //validattion
    if (!username) {
      toast.warning("Vui lòng nhập đầy đủ thông tin username!", {
        position: "top-right",
      });
    } else if (!password) {
      toast.warning("Vui lòng nhập đầy đủ thông tin password!", {
        position: "top-right",
      });
    } else if (!rePassword) {
      toast.warning("Vui lòng nhập lại password!", {
        position: "top-right",
      });
    } else if (!fullName) {
      toast.warning("Vui lòng nhập đầy đủ thông tin Họ tên!", {
        position: "top-right",
      });
    } else if (!email) {
      toast.warning("Vui lòng nhập đầy đủ thông tin email!", {
        position: "top-right",
      });
    } else if (password != rePassword) {
      toast.warning("Mật khẩu và mật khẩu nhập lại không trùng nhau!", {
        position: "top-right",
      });
    } else {
      const resp = await register(username, password, fullName, email);
      if (resp) {
        negative("/login");
      } else {
        toast.error("Lỗi! Vui lòng thử lại sau", {
          position: "top-right",
        });
      }
    }
  };
  //
  return (
    <>
      <Header />
      <section className="vh-100">
        <div className="container-fluid h-custom" style={{ height: "100%" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="SampleImage"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Đăng ký</p>
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control form-control-lg"
                    placeholder="Nhập username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="repassword">
                    Nhập Lại Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    className="form-control form-control-lg"
                    placeholder="Nhập mật khẩu"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="fullName">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control form-control-lg"
                    placeholder="Nhập họ tên"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example3">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={() => submit()}
                  >
                    Đăng ký
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/login" className="link-danger">
                      Đăng nhập
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
};

export default Register;
