import * as Joi from "@hapi/joi";
import * as express from "express";

import {
    ContainerTypes,
     // Extend from this to define a valid schema type/interface
    ValidatedRequestSchema,
    // Creates a validator that generates middlewares
    createValidator
  } from 'express-joi-validation';


  export const validator = createValidator({passError : true});

  export const bodySchema = Joi.object({
    userId: Joi.string().required(),
    name: {
        first_name: Joi.string().optional(),
        middle_name: Joi.string().optional(),
        last_name: Joi.string().optional()
    },
    login: Joi.string().required(),
    password: Joi.string().required(),
    age: Joi.number().required(),
    email: Joi.string().required(),
    phone_number: Joi.string().optional(),
    gender: Joi.string().optional(),
    is_deleted: Joi.boolean().optional(),
  });

  export const updateBodySchema = Joi.object({
    userId: Joi.string().forbidden(),
    name: {
        first_name: Joi.string().optional(),
        middle_name: Joi.string().optional(),
        last_name: Joi.string().optional()
    },
    login: Joi.string().optional(),
    password: Joi.string().forbidden(),
    age: Joi.number().optional(),
    email: Joi.string().optional(),
    phone_number: Joi.string().optional(),
    gender: Joi.string().optional(),
    is_deleted: Joi.boolean().optional(),
  });

  export const paramSchema = Joi.object({
    id: Joi.string().required(),
  });

  export interface UserRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
      userId : String,  
      name: Object,
      login : String,
      password : String,
      age : number,
      email : String,
      phone_number : String,
      gender : String,
      is_deleted : boolean
    }
  }