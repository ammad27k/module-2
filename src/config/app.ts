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
    }

    private config() : void {
         this.express.use(bodyParser.json());
         this.express.use(bodyParser.urlencoded({extended : false}));   
    }

    private connnectToNeDB() : void {
        this.datasource = new NeDB();
    }

    public getDataSouce() : NeDB {
        return this.datasource;
    }
}
export default new App();