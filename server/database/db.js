import mongoose from "mongoose";





const Connection =async(username,password) => {

  const URL=`mongodb://${username}:${password}@inshortsclone-shard-00-00.srbgo.mongodb.net:27017,inshortsclone-shard-00-01.srbgo.mongodb.net:27017,inshortsclone-shard-00-02.srbgo.mongodb.net:27017/?ssl=true&replicaSet=atlas-vf7l8l-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log('databasse connected sucessfully')
  } catch (error) {
    console.log('error while connecting to database',error);
  }
}
 
export default Connection;