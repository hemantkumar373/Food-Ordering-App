import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import approutes from './routes/auth.routes.js';
import dataroutes from './routes/data.routes.js';
import dbconnect from './config/dbconnect.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const __dirname = path.resolve();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api", approutes);
app.use("/api", dataroutes);

app.get("/", (req, res) => {
  res.send("Welcome to Allo Health Food Ordering App");
});

app.listen(PORT, () => {
  dbconnect();
  console.log(`Server is listening on ${PORT}`);
});