export class RegisterUserRequest {
  username: string;
  password: string;
  name: string;
}

export class UserResponse {
  username: string;
  name: string;
  token?: string;
}
