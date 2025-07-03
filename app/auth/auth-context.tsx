import { createContext } from "react";

export interface UserProfile {
  iat: number;
  userId: string;
  name: string;
  email: string;
}

type AuthContextType = {
  user: UserProfile | null;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
