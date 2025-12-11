import express from "express";
import cors from "cors";
import produitsRouter from "./src/produits.js";

const app = express();

app.use(cors());
app.use(express.json());

// Route API
app.use("/products", produitsRouter);

// Route test
app.get("/", (req, res) => {
  res.send("API Ecommerce OK");
});

// Render port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});
