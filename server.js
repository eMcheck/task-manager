import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/tasksRoutes.js';

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(
        `Server listenning on port ${port} and starting at http://localhost:${port}`,
    );
});
