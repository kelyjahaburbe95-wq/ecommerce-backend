import express from "express";
import cors from "cors";
import produitsRouter from "./produits.js";
import checkoutRouter from "./checkout.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/produits", produitsRouter);
app.use("/checkout", checkoutRouter);

app.get("/", (req, res) => {
  res.send("Backend e-commerce opérationnel !");
});

app.listen(3000, () => {
  console.log("🚀 Serveur lancé sur http://localhost:3000");
});
