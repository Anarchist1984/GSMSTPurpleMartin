// UserContext.js

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase"; // Import your Firebase authentication instance

// Create a context to store user information
const UserContext = createContext();

// Custom hook to access user information
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap your application
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        
        // Optionally fetch additional user data from Firestore
        // and store it in state
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
