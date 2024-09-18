import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'


export const verifyJwt = async (req,res,next) =>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

        if(!token){
            res.status(400).json("unauthorised request")
        }

        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SCREATE)

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if(!user){
            res.status(404).json("invalid access token")
        }

        req.user = user
        next()
    
    
    } catch (error) {
        console.log("invalid access token",error)
        next(error)
    }
}