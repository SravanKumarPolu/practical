// App.js
import React, { useEffect } from "react";

function App() {
  // UserProfile
  function loginUser(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User logged in");
        resolve({ userId: 1, username: username });
      }, 1000);
    });
  }

  function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User data fetched");
        resolve({ userId: userId, profile: "User Profile Data" });
      }, 1000);
    });
  }

  function updateUserProfile(userData, newProfile) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User profile updated");
        userData.profile = newProfile;
        resolve(userData);
      }, 1000);
    });
  }

  function saveUserSettings(userId, settings) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User settings saved");
        resolve({ userId: userId, settings: settings });
      }, 1000);
    });
  }

  function sendNotification(userId, message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Notification sent to user");
        resolve({ userId: userId, message: message });
      }, 1000);
    });
  }
  useEffect(() => {
    loginUser("john_doe", "password123")
      .then((user) => {
        return fetchUserData(user.userId);
      })
      .then((userData) => {
        return updateUserProfile(userData, "Updated Profile Data");
      })
      .then((updatedUser) => {
        return saveUserSettings(updatedUser.userId, { theme: "dark mode" });
      })
      .then((savedSettings) => {
        return sendNotification(
          savedSettings.userId,
          "Your settings have been saved!"
        );
      })
      .then((notification) => {
        console.log("All tasks completed successfully!");
      })
      .catch((err) => {
        console.error("An error occurred:", err);
      });
  }, []);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Check the console for the result of the operations.</p>
    </div>
  );
}

export default App;
