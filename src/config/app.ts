import expressjs from "express";
import bodyParser from "body-parser";
import { ApplicationRoutes } from "../routes/application_routes";
import { CommonRoutes } from "../routes/common_routes";
import NeDB from "nedb";

export class App {

    public express : expressjs.Application;
    public datasource!: NeDB;

    public applicationRoutes : ApplicationRoutes  = new ApplicationRoutes();
    public commonRoutes : CommonRoutes = new CommonRoutes();
    
    constructor() {
        this.express = expressjs();
        this.config();
        this.connnectToNeDB();

        this.applicationRoutes.route(this.express);
        this.commonRoutes.route(this.express) 

        this.validationResponse();
    }

    private config() : void {
         this.express.use(bodyParser.json());
         this.express.use(bodyParser.urlencoded({extended : false}));   
    }

    private validationResponse() : void {
        
        this.express.use((err : any, req : expressjs.Request, res : expressjs.Response, next : any) => {
            if (err && err.error && err.error.isJoi) {
              // we had a joi error, let's return a custom 400 json response
              res.status(400).json({
                type: err.type, // will be "query" here, but could be "headers", "body", or "params"
                message: err.error.toString()
              });
            } else {
              // pass on to another error handler
              next(err);
            }
          }); 
    }

    private connnectToNeDB() : void {
        this.datasource = new NeDB();
    }

    public getDataSouce() : NeDB {
        return this.datasource;
    }
}
export default new App();