import express from 'express';
import userRoutes from './routes/user'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});

app.use('/user/', userRoutes);


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
}).on("error", (err) => {
    return console.error(err);
});