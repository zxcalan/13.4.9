import mongoose, { mongo } from 'mongoose'
export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to db')
    } catch (error) {
        console.log('Error connecting to db', error)
        
    }
}