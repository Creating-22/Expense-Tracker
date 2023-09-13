const mongoose=require('mongoose')
const db=async ()=> {
    try {
        mongoose.set('strictQuery', false);
        await mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
          console.log('MongoDB connected!!')
        })
        
    }

    catch (error) {
        console.log("DB Connection failed");

    }
}
module.exports={db} ;
