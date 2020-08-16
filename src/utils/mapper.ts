import { Request } from "express";
import { IUser } from "../models/user";

export function convertToIUserFromRequest(req : Request) : IUser {

    if(!req.body.name.first_name || !req.body.name.last_name || !req.body.email 
        || !req.body.userId || !req.body.login || !req.body.password || !req.body.age) {
            return null as any;
        }

    const user: IUser = {
        userId : req.body.userId,
        name: {
            first_name: req.body.name.first_name,
            middle_name: req.body.name.middle_name,
            last_name: req.body.name.last_name
        },
        login : req.body.login,
        password : req.body.password,
        age : req.body.age,
        email: req.body.email,
        phone_number: req.body.phone_number,
        gender: req.body.gender,
        is_deleted : req.body.is_deleted
    };
    return user;
}

export function convertToIUserFromRequestToUpdate(req : Request) : IUser {
    const user: IUser = {
        name: {
            first_name: req.body.name.first_name,
            middle_name: req.body.name.middle_name,
            last_name: req.body.name.last_name
        },
        login : req.body.login,
        password : req.body.password,
        age : req.body.age,
        email: req.body.email,
        phone_number: req.body.phone_number,
        gender: req.body.gender,
        is_deleted : req.body.is_deleted
    };
    return user;
}

export function convertToIUserFromRequestToRemove(req : Request) : IUser {
    const user: IUser = {
        is_deleted : req.body.is_deleted
    };
    return user;
}