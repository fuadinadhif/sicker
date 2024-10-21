import express from "express";
import cors from "cors";

import roomRoutes from "./routes/room-routes";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1", (req, res) => {
  return res.status(200).json({ message: "Welcome to Booking Picker API v1" });
});

app.use("/api/v1/rooms", roomRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
