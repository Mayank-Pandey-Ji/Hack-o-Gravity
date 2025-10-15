import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { connectDB } from './lib/db.js';

// Create Express app and HTTP server 

const app = express();



// Middleware 

app.use(express.json({limit: "4mb"}));

app.use(cors());

app.use("/api/status" , (req,res)=> res.send("Server is live"))



/// connect to mongodb
await connectDB();

if(process.env.NODE_ENV !== "production")
{
    const PORT = process.env.PORT || 5000;
    server.listen(PORT , ()=> console.log("Server is Running on PORT: ", PORT));
}

// export server for vercel
export default server;