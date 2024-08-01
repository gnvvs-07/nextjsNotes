import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async() =>{
    mongoose.set("strictQuery",true);
    if(isConnected){
        console.log("DB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"notes_Next",
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}