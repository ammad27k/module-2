export interface IUser {
    _id?: String;
    userId?: String;
    name?: {
        first_name?: String;
        middle_name?: String;
        last_name?: String;
    };
    login?: String;
    password?: String;
    age?: number;
    email?: String;
    phone_number?: String;
    gender?: String;
    is_deleted?: Boolean;
}