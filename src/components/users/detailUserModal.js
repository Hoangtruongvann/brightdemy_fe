import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";

const DetailUserModal = ({ showDetail, setShowDetail, user }) => {
  return (
    <Modal
      show={showDetail}
      onHide={() => setShowDetail(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thông tin người dùng
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
            value={user.username}
            disabled
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
            value={user.fullName}
            disabled
          />
        </div>
        <div className="form-outline mb-2" size="lg">
          <label className="form-label" htmlFor="role">
            Role
          </label>
          <input
            type="text"
            id="role"
            className="form-control form-control-lg"
            value={user.roleId}
            disabled
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="status">
            Địa chỉ Email
          </label>
          <input
            type="email"
            id="status"
            className="form-control form-control-lg"
            value={user.email}
            disabled
          />
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="status">
            Trạng thái tài khoản
          </label>
          <input
            type="text"
            id="status"
            className="form-control form-control-lg"
            value={user.status ? "Blocked" : "Active"}
            disabled
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowDetail(false)} variant="secondary">
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DetailUserModal;
