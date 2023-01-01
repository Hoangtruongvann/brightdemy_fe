import { createContext } from "react";

const AuthContext = createContext({
  user: {},
  setUser: (user) => {},
  role: {},
  setRole: (role) => {},
});

export default AuthContext;
