import mongoose from "mongoose";
import DotenvComponent from "../components/DotEnvComponent";

export default class DatabaseConfig{

    constructor(){
        const urlDatabase = DotenvComponent.API_DATABASE_URL
        mongoose.connect(urlDatabase)
            .then( () => {
                console.log("database connect successfully")
            })
            .catch( (error:Error) =>{
                console.log("database connect unsuccessfully", error.message)
            } )
    }
}