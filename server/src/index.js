import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.router.js'
import userRoutes from './routes/user.router.js'

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/posts', postRoutes)
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify: false})
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

