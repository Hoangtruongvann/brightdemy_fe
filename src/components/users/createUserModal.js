import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";
import { getAllRole } from "../../API/roleAPI";
import { createUser } from "../../API/userAPI";

const CreateUserModal = ({ showCreate, setShowCreate, getData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(-1);
  const [listRole, setListRole] = useState([]);
  //Get all role
  const getListRole = async () => {
    const data = await getAllRole();
    setListRole(data);
  };
  //submit form create user
  const submit = async () => {
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
    } else if (!role || role === -1) {
      toast.warning("Vui lòng chọn Role!", {
        position: "top-right",
      });
    } else if (password != rePassword) {
      toast.warning("Mật khẩu và mật khẩu nhập lại không trùng nhau!", {
        position: "top-right",
      });
    } else {
      const resp = await createUser(username, password, fullName, email, role);
      if (resp) {
        getData();
        setShowCreate(false);
      } else {
        toast.error("Lỗi! Vui lòng thử lại sau", {
          position: "top-right",
        });
      }
    }
  };
  //useEffect
  useEffect(() => {
    getListRole();
  }, []);

  return (
    <Modal
      show={showCreate}
      onHide={() => setShowCreate(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tạo mới User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-outline mb-2 ">
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
        <div className="form-outline mb-2" size="lg">
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
          <label className="form-label" htmlFor="fullName">
            Role
          </label>
          <Form.Select
            size="lg"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value={-1} selected={role === -1}>
              Chọn Role
            </option>
            {listRole.map((item) => (
              <option value={item.roleId} selected={role === item.roleId}>
                {item.name}
              </option>
            ))}
          </Form.Select>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => submit()}>Lưu</Button>
        <Button onClick={() => setShowCreate(false)} variant="secondary">
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateUserModal;
