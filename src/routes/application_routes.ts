import {Application, Request, Response} from "express";
import { UserController } from "../controllers/user_controller";
import {UserRequestSchema, bodySchema,updateBodySchema,  validator, paramSchema} from "../validators/user-validator";
import {ValidatedRequest} from "express-joi-validation";

export class ApplicationRoutes {

    private userControler : UserController = new UserController();

    public route(app : Application) {
        app.post("/api/user", validator.body(bodySchema), (req : ValidatedRequest<UserRequestSchema>, res : Response) => {
            this.userControler.createUser(req, res);
        });

        app.get("/api/user/:id", validator.params(paramSchema), (req : Request, res : Response) => {
            this.userControler.getUser(req, res);
        });

        app.put("/api/user/:id", validator.params(paramSchema),validator.body(updateBodySchema), (req : ValidatedRequest<UserRequestSchema>, res : Response) => {
            this.userControler.updateUser(req, res);
        });

        app.delete("/api/user/:id", validator.params(paramSchema), (req : Request, res : Response) => {
            this.userControler.removeUserWithSoftDeletion(req, res);
        });

        app.get("/api/users", (req : Request, res : Response) => {
            this.userControler.getAllUsers(req, res);
        });
    }    
}
