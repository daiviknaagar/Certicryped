import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/users.js';
import OwnerUserRoutes from './routes/OwnerUser.js';
import universityRoutes from './routes/universities.js';
import GranteeRoutes from "./routes/Grantee.js";

const PORT = process.env.PORT || 5000;

const uri = "mongodb+srv://Rahil:Rahil@certi.kftfjvy.mongodb.net/";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connected to database`);
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user', userRoutes);
app.use('/OwnerUser', OwnerUserRoutes);
app.use('/universites', universityRoutes);
// app.use('/Grantee', GranteeRoutes)
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})