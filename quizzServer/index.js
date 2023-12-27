import  express  from "express";
import cors from "cors" 
import bodyParser from 'body-parser';
import QuizzRoutes from './Routes/QuizzRoute.js'

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use('/api/Quizz', QuizzRoutes);

app.listen(4000, () =>{
    console.log("server running on port 4000");
});