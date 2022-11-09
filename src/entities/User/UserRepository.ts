import RepositoryTemplate from "../../templates/RepositoryTemplate";
import UserModel from "./UserModel";

export default class UserRepository extends RepositoryTemplate{
    constructor(){
        super(UserModel);
    }
}