import UserService from "../../services/user";
import { CreateUserPayload } from "../../services/user";

const queries = {
  hello: () => "ajay",
};
const mutations = {
  //   mutations: async (_: any, {}: {}) => {
  //     return "";
  //   },
  createUser: async (_: any, payload: CreateUserPayload) => {
    // console.log(payload);
    // return "hero2";
    let res = UserService.createUser(payload);
    return res;
  },
  createUser1: async (_: any, name: String) => {
    // console.log(payload);
    return "ajay";
    // const res = UserService.createUser(payload);
    // return "hero";
  },
};

export const resolvers = { queries, mutations };
