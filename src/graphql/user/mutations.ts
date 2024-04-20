import { CreateUserPayload } from "../../services/user";

export const mutations = `#graphql
    createUser(firstName:String,lastName:String,email:String,password:String):Boolean!,
    createUser1(name:String):String
`;
