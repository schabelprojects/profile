import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.download("../documents/samirschabel.pdf");
});

app.listen(4000);
