const express = require("express");
const app = express();
const port = 3000;

// Simulated asynchronous functions
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

// Express.js route
app.get("/user-profile", async (req, res) => {
  try {
    const user = await loginUser("john_doe", "password123");
    const userData = await fetchUserData(user.userId);
    const updatedUser = await updateUserProfile(
      userData,
      "Updated Profile Data"
    );
    const savedSettings = await saveUserSettings(updatedUser.userId, {
      theme: "dark mode",
    });
    const notification = await sendNotification(
      savedSettings.userId,
      "Your settings have been saved!"
    );

    console.log("All tasks completed successfully!");
    res.status(200).send("All tasks completed successfully!");
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).send("An error occurred while processing the request.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
