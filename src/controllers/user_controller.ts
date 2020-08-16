import { Request, Response } from 'express';
import UserService from "../services/user_service";
import { successResponse, databaseError, insufficientParameters } from '../utils/helpers';
import { IUser } from "../models/user";
import { convertToIUserFromRequest, convertToIUserFromRequestToUpdate, convertToIUserFromRequestToRemove } from '../utils/mapper';

export class UserController {

    public userService : UserService = new UserService();

    public createUser(req: Request, res : Response) {

        const user: IUser = convertToIUserFromRequest(req);

        if( user ) {
            this.userService.createUser(user, (err : any, newUser : IUser) => {
                if(!err){
                    successResponse('create user successfull', newUser, res);
                } else {
                    databaseError(err, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public getUser(req : Request, res : Response) {
        if(req.params.id) {
            this.userService.findById(req.params.id, (err : any, user : IUser) => {
                if(!err) {
                        successResponse('SUCESS', user, res);
                } else {
                        databaseError(err, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public updateUser(req: Request, res : Response) {
        if(req.params.id) {
            const user : IUser =  convertToIUserFromRequestToUpdate(req);
            this.userService.updateUser(req.params.id, user, (err : any, data : any)  => {
                if(!err) {
                    successResponse("Updated Successfull", data, res );
                }  else {
                    databaseError(err, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
        
    }


    public removeUserWithSoftDeletion(req : Request, res : Response) {
        if(req.params.id) {
            const user : IUser =  convertToIUserFromRequestToRemove(req);
            this.userService.softDelete(req.params.id, user, (err : any, data : any) => {
                if(!err) {
                    successResponse("Soft deleted successfull", data, res );
                } else {
                    databaseError(err, res);
                }
                
            });
        } else {
            insufficientParameters(res);
        }
    }

    public getAllUsers(req : Request, res : Response) {
        this.userService.getAllUsers((err : any, userList : Array<IUser>) => {
            if(!err){
                successResponse('SUCESS', userList, res);
            }    
        });
    }
}