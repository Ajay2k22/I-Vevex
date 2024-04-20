import { CreateUserPayload } from "../services/user";
import { User } from "../graphql/user/model/user";
import errorHandler from "../middleware/errorHandler/customErrorHandler";
import CustomErrorHandler from "../middleware/errorHandler/customErrorHandler";

class UserDao {
  public static async createUser(payload: CreateUserPayload) {
    let res: CreateUserPayload;
    let isSuccess: boolean = false;
    try {
      res = await User.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
      if (res != undefined || res != null) {
        isSuccess = true;
        return isSuccess;
      } else {
        return isSuccess;
      }
    } catch (e: any) {
      // errorHandler(e,)
      //   new errorHandler(e, 400);
      new CustomErrorHandler(e.message, e.status);
    }
  }
}
export default UserDao;
