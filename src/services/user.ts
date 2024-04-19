export interface CreateUserPayload {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

class UserService {
  public static createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password } = payload;
    return payload;
  }
}

export default UserService;
