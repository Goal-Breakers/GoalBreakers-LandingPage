import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [redirectPath, setRedirectPath] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    // Mock authentication
    if (username === "admin" && password === "admin") {
      const userData = { username: "admin", role: "admin" };
      setUser(userData);
      localStorage.setItem("authUser", JSON.stringify(userData));
      return true;
    } else if (username === "user" && password === "user") {
      const userData = { username: "user", role: "user" };
      setUser(userData);
      localStorage.setItem("authUser", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const Cadastrar = (userData) => {
    // Mock account creation - always succeed for now
    console.log("User registered:", userData);
    return true;
  };

  const isAdmin = () => user && user.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        Cadastrar,
        isAdmin,
        redirectPath,
        setRedirectPath,
        isLoginModalOpen,
        setIsLoginModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
