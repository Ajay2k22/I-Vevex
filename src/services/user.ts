import { User } from "../graphql/user/model/user";
import UserDao from "../dao/user";
export interface CreateUserPayload {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

class UserService {
  public static async createUser(payload: CreateUserPayload) {
    let res = UserDao.createUser(payload);
    return res;
  }
}

export default UserService;
