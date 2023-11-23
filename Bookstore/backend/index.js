import  express  from "express";
import { PORT,mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from './routes/bookRoute.js'
import cors from'cors';


const app = express();
app.use(cors());
//middleware for parsing request body

app.use(express.json());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack Tutorial')
});

app.use('/books',booksRoute);





mongoose.connect(mongodbURL).then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
})