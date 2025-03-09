import express from "express";
import { setupSwagger } from "./swager";
import router from "./routes/index";

const app = express();
app.use(express.json());

setupSwagger(app);
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Express + TypeScript Server is Running!");
  });

// Export the handler for Vercel
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;


