import * as Joi from "@hapi/joi";

import {
    ContainerTypes,
     // Extend from this to define a valid schema type/interface
    ValidatedRequestSchema,
    // Creates a validator that generates middlewares
    createValidator
  } from 'express-joi-validation';


  export const validator = createValidator({passError : true});

  export const bodySchema = Joi.object({
     name: {
        first_name: Joi.string().optional(),
        middle_name: Joi.string().optional(),
        last_name: Joi.string().optional()
    },
    login: Joi.string().required().min(4).max(60),
    password: Joi.string().pattern(
      new RegExp('^(?=.*[0-9]{1,})(?=.*[a-zA-Z]{1,})([a-zA-Z0-9]+)$'),
      'Password must contain letters and numbers'
    ).required(),
    age: Joi.number().required().min(4).max(130),
    email: Joi.string().required(),
    phone_number: Joi.string().optional(),
    gender: Joi.string().optional(),
    is_deleted: Joi.boolean().optional(),
  });

  export const updateBodySchema = Joi.object({
    name: {
        first_name: Joi.string().optional(),
        middle_name: Joi.string().optional(),
        last_name: Joi.string().optional()
    },
    login: Joi.string().forbidden(),
    password: Joi.string().forbidden(),
    age: Joi.number().forbidden(),
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