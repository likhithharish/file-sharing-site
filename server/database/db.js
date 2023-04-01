import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = 'test';
  const PASSWORD = 'test123';

  const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-fkdgikz-shard-00-00.jduufc6.mongodb.net:27017,ac-fkdgikz-shard-00-01.jduufc6.mongodb.net:27017,ac-fkdgikz-shard-00-02.jduufc6.mongodb.net:27017/?ssl=true&replicaSet=atlas-3s9fzo-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
