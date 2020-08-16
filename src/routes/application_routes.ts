import {Application, Request, Response} from "express";
import { UserController } from "../controllers/user_controller";

export class ApplicationRoutes {

    private userControler : UserController = new UserController();

    public route(app : Application) {
        app.post("/api/user", (req : Request, res : Response) => {
            this.userControler.createUser(req, res);
        });

        app.get("/api/user/:id", (req : Request, res : Response) => {
            this.userControler.getUser(req, res);
        });

        app.put("/api/user/:id", (req : Request, res : Response) => {
            this.userControler.updateUser(req, res);
        });

        app.delete("/api/user/:id", (req : Request, res : Response) => {
            this.userControler.removeUserWithSoftDeletion(req, res);
        });

        app.get("/api/users", (req : Request, res : Response) => {
            this.userControler.getAllUsers(req, res);
        });
    }    
}
