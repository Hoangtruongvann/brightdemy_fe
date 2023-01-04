import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
  "accessToken"
)}`;

//Get All comment by courses ID
export const GetAllCommentByID = async (id) => {
  try {
    const resp = await axios.get("url");
    return resp.data;
  } catch (error) {
    return [];
  }
};
//Create new comment
export const createComment = async (userID, coursesID, content) => {
  try {
    const resp = await axios.post("url", {
      userID: userID,
      coursesID: coursesID,
      content: content,
    });
    return resp;
  } catch (error) {
    return null;
  }
};
