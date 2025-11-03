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

  const getUsers = () => {
    const users = localStorage.getItem("registeredUsers");
    return users ? JSON.parse(users) : [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  };

  const login = (username, password) => {
    // Check registered users first
    const users = getUsers();
    const foundUser = users.find(
      (user) => user.nomeUsuario === username && user.senha === password
    );
    if (foundUser) {
      const userData = {
        username: foundUser.nomeUsuario,
        role: "user",
        ...foundUser,
      };
      setUser(userData);
      localStorage.setItem("authUser", JSON.stringify(userData));
      return true;
    }
    // Fallback to mock authentication
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
    const users = getUsers();
    // Check if username is already taken
    if (users.some((user) => user.nomeUsuario === userData.nomeUsuario)) {
      return false; // Username already exists
    }
    // Add new user
    users.push(userData);
    saveUsers(users);
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
