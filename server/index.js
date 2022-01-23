import express  from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routes/post.js';

const app = express();

app.use('/posts', postRouter);

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://firstmern:mern123456@cluster0.rt6qf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is runnig on port: ${PORT}`)))
    .catch((err) => console.log(err.message));
