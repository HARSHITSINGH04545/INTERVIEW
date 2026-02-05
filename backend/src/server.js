import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
const app = express ( ) ;

console. log(ENV.PORT) ;
console. log(ENV.DB_URL) ;
app.get("/health", (req, res) => {
res.json("sapi is up and runing" );
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


    

