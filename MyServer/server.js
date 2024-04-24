const express = require("express");
const app = express();

// Allow parsing of json bodies in POST requests
app.use(express.json());

// Handle POST request for 'play'
app.post("/play", (req, res) => {
  console.log("Play command received");
  // Add logic for play command here
  res.status(200).json({ message: "Play command executed" });
});

// Handle POST request for 'pause'
app.post("/pause", (req, res) => {
  console.log("Pause command received");
  // Add logic for pause command here
  res.status(200).json({ message: "Pause command executed" });
});

// Handle POST request for 'restart'
app.post("/restart", (req, res) => {
  console.log("Restart command received");
  // Add logic for restart command here
  res.status(200).json({ message: "Restart command executed" });
});

// Handle POST request for 'stop'
app.post("/stop", (req, res) => {
  console.log("Stop command received");
  // Add logic for stop command here
  res.status(200).json({ message: "Stop command executed" });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
