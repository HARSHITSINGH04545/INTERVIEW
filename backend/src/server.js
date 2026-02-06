import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import {inngest,functions} from "./lib/inngest.js"
import {serve} from "inngest/express"
const app = express ( ) ;

console. log(ENV.PORT) ;
console. log(ENV.DB_URL) ;

// middleare 
app.use(express.json());
//
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use("/api/inngest",serve({client:inngest,functions}))

app.get("/", (req, res) => {
res.json("welcome to the home page" );
})
app.get("/health", (req, res) => {
res.json("sapi is up and runing" );
})
app.get("/books", (req, res) => {
res.json("books page is running fine!.." );
})


const startServer = async () => {

try {

await connectDB();

app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));

} catch (error) {

console.error("* Error starting the server", error)

}

};



startServer();


    

