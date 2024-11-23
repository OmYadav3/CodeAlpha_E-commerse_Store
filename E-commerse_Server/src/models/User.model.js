import mongoose,{Schema} from 'mongoose'

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
            min: 2,
            max: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is Required"]
        },
        avatar: {
            type: String,  // cloudnary url
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps:true
    }
)

export const User = mongoose.model('User', userSchema )