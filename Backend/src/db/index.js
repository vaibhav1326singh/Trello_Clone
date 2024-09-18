
import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "../../constant.js";

const connectdb = async() =>{
    // console.log(DB_NAME)
    try {
        
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}`)
    } catch (error) {
        console.log("mongooes is not connected:",error)
        process.exit(1)
    }
}

export default connectdb