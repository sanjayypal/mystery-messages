import mongoose from "mongoose";

type connnectionObject = {
    isConnected?:number
}

const connection:connnectionObject = {}


async function dbConnect():Promise<void>{
   if(connection.isConnected)
   {
    console.log("Already connected to DB")
    return 
   }
   try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
    connection.isConnected = db.connections[0].readyState
    console.log("DB connected successfully");
   } catch (error) {
    console.log("DB connection Failed "+error);
    process.exit(1);
   }
}