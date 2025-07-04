import { useContext } from "react";
import AuthContext, { UserProfile } from "./auth-context";
import authStorage from "./storage";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (token: string) => {
    const user = jwtDecode<UserProfile>(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    authStorage.removeToken();
    setUser(null);
  };

  return { user, logIn, logOut };
};

export default useAuth;
