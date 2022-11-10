import mongoose from "mongoose";
import DotenvComponent from "../components/DotEnvComponent";

export default class DatabaseConfig{

    public static async connect(){
        const urlDatabase = DotenvComponent.API_DATABASE_URL
        try {
            await mongoose.connect(urlDatabase);
            console.log("Database connect successfully");
            return;
        } catch (error) {
            console.log("Database connect unsuccessfully", error.message);
        }
    }
    
}