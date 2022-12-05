import React from "react";

const Comment = () => {
  return (
    <div className="comment mt-4 text-justify float-left">
      <img
        src="https://i.imgur.com/yTFUilP.jpg"
        alt=""
        className="rounded-circle"
        width="40"
        height="40"
      />
      <h4>Jhon Doe</h4>
      <span>5-12-2022, Lúc 23:12</span>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        numquam assumenda hic aliquam vero sequi velit molestias doloremque
        molestiae dicta?
      </p>
    </div>
  );
};
export default Comment;
