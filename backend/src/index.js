import express from "express";
import cors from "cors";
import produitsRoutes from "./produits.js"; // <-- ROUTE PRODUITS

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/produits", produitsRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
