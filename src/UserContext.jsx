import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const correctEmail = "test@gmail.com";
  const correctPassword = "123456";

  const login = (email, password) => {
    if (email === correctEmail && password === correctPassword) {
      setUser({ email });
      return { success: true };
    } else {
      return { success: false, massage: "Invalid email or password" };
    }
  };
  const logOut = () => {
    setUser(null);
  };
  return <UserContext.Provider value={{user,login,logOut}}>{children}</UserContext.Provider>;
};

export default UserProvider;
