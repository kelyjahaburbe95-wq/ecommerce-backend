import express from "express";
import cors from "cors";
import productsRouter from "./products.js";
import checkoutRouter from "./checkout.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/checkout", checkoutRouter);

app.listen(3000, () => console.log("Backend running on port 3000"));
