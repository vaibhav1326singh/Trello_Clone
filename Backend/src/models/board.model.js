import mongoose, {Schema} from 'mongoose'

const boardSchema = new Schema(
    {
        BoardName:{
            type:String,
            required:true
        },
        // ListTitle:{
        //     type:String,
        //     required:true

        // },
        // Cards:{
        //     type:Array,
        //     required:true
        // }

},
{
    timestamps: true
}
)

export const Board = mongoose.model('Board',boardSchema)