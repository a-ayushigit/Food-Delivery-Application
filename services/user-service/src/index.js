import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

//dotenv.config()
import connectDB from '../src/config/connectDB.js'


const port = process.env.PORT || 3000;


const app = express();

app.use(express.json());


const start = async() => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(port , ()=>{
            console.log(`Server running on port ${port}`);
            
        })
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
        
    }
}

start();

