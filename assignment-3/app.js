import express from 'express';
import home from "./routes/home.js";
import users from "./routes/users.js";
import path from "path";
import {rootDir} from "./constants/index.js";

const app = express()

app.use(express.static(path.join(rootDir, 'public')));

app.use(home);
app.use('/users', users);

app.listen(3000)