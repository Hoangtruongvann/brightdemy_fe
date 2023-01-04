import "./css/hoang.css";
import "./css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/partials/NotFound/NotFound";
import Courses from "./components/courses/list";
import Detail from "./components/courses/detail";
import Create from "./components/courses/create";
import QAndA from "./components/courses/Q&A";
import CourseUsers from "./components/courses/courseUsers";
import Login from "./components/authenticate/login";
import Register from "./components/authenticate/register";
import Profile from "./components/authenticate/profile";
import ListUsers from "./components/users/list-users";
import Loading from "./components/partials/loading/loading";
import AuthContext from "./context/authContext";
import { auth } from "./API/authenAPI";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const authen = async () => {
    const data = await auth();
    setRole(data.role);
    setUser(data.user);
    if (!data.user) setAuthenticate(false);
  };
  useEffect(() => {
    authen();
    setLoading(false);
  }, []);

  if (!loading)
    return (
      <AuthContext.Provider
        value={{
          authenticate,
          setAuthenticate,
          user: user,
          setUser: setUser,
          role: role,
          setRole: setRole,
        }}
      >
        {authenticate && (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Courses />} />
                  <Route path="/courses">
                    <Route index element={<Courses />} />
                    <Route path="/courses/create" element={<Create />} />
                    <Route path="/courses/detail/:id" element={<Detail />} />
                    <Route path="/courses/QA/:id" element={<QAndA />} />
                    <Route
                      path="/courses/users/:id"
                      element={<CourseUsers />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/list-users" element={<ListUsers />}></Route>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        )}
        {!authenticate && (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Login />} />

                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>

                  <Route path="*" element={<Login />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </AuthContext.Provider>
    );
  else return <Loading />;
}

export default App;
