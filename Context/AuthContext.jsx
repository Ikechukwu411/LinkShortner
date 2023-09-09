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
});

export const AuthContextProvider = (props) => {
  const [currentUser, setcurrentUser] = useState("");
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser: currentUser,
    signUp: signUpHandler,
    logIn: logInHandler,
    signOut: signOutHandler,
    sidebarT: sidebarToggler,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
