import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { cart } = req.body;
  return res.json({ message: "Checkout complete!", cart });
});

export default router;
