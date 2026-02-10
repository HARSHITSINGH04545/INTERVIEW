import dotenv from "dotenv";
dotenv.config({ quiet: true }); // Load env variables first
import { clerkMiddleware } from "@clerk/express";
import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import {inngest,functions} from "./lib/inngest.js"
import {serve} from "inngest/express"
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoute from "./routes/sessionRoute.js"
const app = express ( ) ;
console.log(
  "INNGEST_SIGNING_KEY:",
  process.env.INNGEST_SIGNING_KEY ? "Loaded" : "Missing"
);
console.log("STREAM_API_KEY:", ENV.STREAM_API_KEY ? "Loaded" : "Missing");
console.log("STREAM_API_SECRET:", ENV.STREAM_API_SECRET ? "Loaded" : "Missing");

console. log(ENV.PORT) ;
console. log(ENV.DB_URL) ;

// middleare 
app.use(express.json());
//
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
app.use(clerkMiddleware()); 
app.use("/api/inngest",serve({client:inngest,functions}))

app.use("/", (req, res) => {
res.json("welcome to the home page" );
})
app.get("/health", (req, res) => {
  
res.json("sapi is up and runing" );
})
app.use("/api/chat", chatRoutes)
app.use("/api/session", sessionRoute)



const startServer = async () => {

try {

await connectDB();

app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));

} catch (error) {

console.error("* Error starting the server", error)

}

};



startServer();


    

