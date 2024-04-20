class CustomErrorHandler extends Error {
  status: number;
  message: string;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }

  static alreadyExist(message: string) {
    return new CustomErrorHandler(message, 409);
  }

  static wrongCredentials(message = "Username or password is wrong") {
    return new CustomErrorHandler(message, 401);
  }

  static unAuthorized(message = "Unauthorized") {
    return new CustomErrorHandler(message, 403); // 403 for unauthorized
  }

  static notFound(message = "404 not Found") {
    return new CustomErrorHandler(message, 404);
  }
}

export default CustomErrorHandler;
