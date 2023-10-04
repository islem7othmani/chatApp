const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const connexion = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology : true,
      })
      console.log(`db connected ${connexion.connection.host}`)
    }catch(error){
        console.log(error);
        process.exit()
    }
}
module.exports= connectDB 

















