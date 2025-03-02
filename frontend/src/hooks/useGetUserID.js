import { useState, useEffect } from "react";
import axios from "axios";

const useGetUserID = () => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchUserID = async () => {
      try {
        // First, check if the user ID is stored in localStorage
        const storedUserID = localStorage.getItem("userId");
        if (storedUserID) {
          setUserID(storedUserID);
          return;
        }

        // If not in localStorage, fetch from API
        const response = await axios.get("https://your-api.com/user/id", {
          withCredentials: true, // Needed if using authentication cookies
        });

        setUserID(response.data.userID);

        // Save the user ID in localStorage for later use
        localStorage.setItem("userId", response.data.userID);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserID();

    // Cleanup function to prevent memory leaks
    return () => {
      setUserID(null);
    };
  }, []);

  return userID;
};

export default useGetUserID;
