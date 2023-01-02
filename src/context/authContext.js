import { createContext } from "react";

const AuthContext = createContext({
  authenticate: {},
  setAuthenticate: () => {},
  user: {},
  setUser: (user) => {},
  role: {},
  setRole: (role) => {},
});

export default AuthContext;
