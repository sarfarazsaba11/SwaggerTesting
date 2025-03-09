import express from "express";
import { setupSwagger } from "./swager";
import router from "./routes/index";

const app = express();
app.use(express.json());

setupSwagger(app);
app.use("/api", router);

// Export the handler for Vercel
export default app;
