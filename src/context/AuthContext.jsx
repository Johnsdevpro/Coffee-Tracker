import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const { children } = props;
  const [globalUser, setGlobalUser] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    setGlobalUser(null);
    setGlobalData(null);

    return signOut(auth);
  }

  const value = {
    globalUser,
    globalData,
    setGlobalData,
    isLoading,
    signup,
    signin,
    signout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(" Current user:", user);
      setGlobalUser(user);
      if (!user) {
        console.log("No active user");
        setGlobalData(null);
        return;
      }
      try {
        setIsLoading(true);

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        let firebaseData = {};

        if (docSnap.exists()) {
          console.log("found user data");
          firebaseData = docSnap.data();
        } else {
          console.log("User document does not exist.");
        }

        setGlobalData(firebaseData);
      } catch (err) {
        console.log("Error in verifying auth state", err.message);
      } finally {
        setIsLoading(false);
      }
    });
    return unSubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
