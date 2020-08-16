import app from "../config/app";
import { IUser } from "../models/user";

export default class UserService {


    public createUser(user : IUser, callback : any) : void {        
        app.getDataSouce().insert(user, callback);
    }

    public findById(id : String, callback : any) : void {
        app.getDataSouce().findOne({_id : id}, callback);
    }

    public updateUser(id : String, user : IUser, callback : any) : void {
        app.getDataSouce().update({_id : id}, { $set: user}, callback);
    }

    public softDelete(id : String, user : IUser, callback : any) : void {
        app.getDataSouce().update({_id : id}, { $set: user}, callback);
    }

    public getAutoSuggestUsers(loginSubstring: string, limit : number, callback : any) : void {
        const regex = new RegExp(`${loginSubstring}`, "g");
        const filter = { login: { $regex: regex}};
        app.getDataSouce().find(filter).limit(limit).exec(callback);
    }

    public getAllUsers(callback : any) : void {
        app.getDataSouce().find({}, callback);
    }
}
