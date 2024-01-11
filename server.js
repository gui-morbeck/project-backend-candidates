import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import databaseConnector from "./src/database/db.js";
import candidateRoute from "./src/routes/candidate.route.js";

const port = process.env.PORT || 3001;

databaseConnector.connectDatabase();

const appExpress = express();

appExpress.use(express.json());
appExpress.use(cors()); 

appExpress.use("/candidates", candidateRoute);

appExpress.listen(port, (error) => {
    if (error) {
      console.log("Error...");
    } else {
      console.log(`Server running on port ${port}`);
    }
});