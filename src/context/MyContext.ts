import React from "react";
import { IUser } from "../type/type";

export interface IData{

    users: IUser[];
    createUser: Function;
    deleteUserById: Function 
}

export const MyContext = React.createContext<IData>({} as IData)