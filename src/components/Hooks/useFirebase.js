import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, [auth]);
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logInWithEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { user, logOut, logInWithEmail, logInWithGoogle, isLoading };
};
export default useFirebase;
