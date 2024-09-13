import express from 'express';
import catRoutes from "./routes/cat.routes";

const app = express();

app.use(express.json());

app.use('/cats', catRoutes);

export default app;
