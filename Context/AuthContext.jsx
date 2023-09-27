import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/firebaseconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext({
  currentUser: "",
  signUp: (email, password) => {},
  logIn: (email, password) => {},
  signOut: () => {},
  sidebarT: () => {},
  userIdFunc: () => {},
  userId: "",
});

export const AuthContextProvider = (props) => {
  const [currentUser, setcurrentUser] = useState("");
  const [userId, setUserId] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const signUpHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutHandler = () => {
    return signOut(auth).then(() => {
      console.log("okay");
    });
  };

  const sidebarToggler = () => {
    setSidebar(!sidebar);
  };

  const userIdHandler = (id) => {
    return setUserId(id);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // console.log(currentUser);

  const value = {
    currentUser: currentUser,
    signUp: signUpHandler,
    logIn: logInHandler,
    signOut: signOutHandler,
    sidebarT: sidebarToggler,
    userIdFunc: userIdHandler,
    userId: userId,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
