import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import enrollmentCourse from './routes/enrollments.routes.js';
import connectToDatabase from "./database/connection.js";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use("/users", usersRoutes);
app.use("/courses", coursesRoutes);
app.use("/enrollment", enrollmentCourse);
app.listen(6969, () => {    
    console.log("Hello world");
    connectToDatabase()
});