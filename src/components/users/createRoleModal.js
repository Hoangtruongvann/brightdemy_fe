import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";
import { createRole } from "../../API/roleAPI";

const CreateRoleModal = ({ showCreateRole, setShowCreateRole }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //submit form create role
  const submit = async () => {
    if (!name) {
      toast.warning("Vui lòng nhập tên role!", {
        position: "top-right",
      });
    } else if (!description) {
      toast.warning("Vui lòng nhập đầy đủ thông tin mô tả!", {
        position: "top-right",
      });
    } else {
      const resp = await createRole(name, description);
      if (resp) {
        setShowCreateRole(false);
      } else {
        toast.error("Lỗi! Vui lòng thử lại sau", {
          position: "top-right",
        });
      }
    }
  };
  return (
    <Modal
      show={showCreateRole}
      onHide={() => setShowCreateRole(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tạo mới Role
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-outline mb-2 ">
          <label className="form-label" htmlFor="username">
            Tên role
          </label>
          <input
            type="text"
            id="name"
            className="form-control form-control-lg"
            placeholder="Nhập tên role"
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </div>

        <div className="form-outline mb-2" size="lg">
          <label className="form-label" htmlFor="description">
            Mô tả
          </label>
          <input
            type="text"
            id="description"
            className="form-control form-control-lg"
            placeholder="Nhập mô tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        <Button onClick={() => setShowCreateRole(false)} variant="secondary">
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRoleModal;
