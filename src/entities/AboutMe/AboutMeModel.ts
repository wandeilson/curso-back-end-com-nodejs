import mongoose from "mongoose";
import { v4 } from "uuid";

const schema = new mongoose.Schema({
    _id:{
        type: String,
        require: true,
        default: v4()
    },
    description:{
        type: String,
        require: true
    },
    userUuid:{
        type: String,
        require: true,
        unique: true,
        ref: "User"
    },

    academicDescription:{
        type: String,
        require: true
    },
    projects:[{
        type: String,
        require: true
    }],
    curiosities:[{
        type: String,
        require: true
    }]
});

const AboutMeModel = mongoose.model("About",schema);

export default AboutMeModel;