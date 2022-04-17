export interface Authenticate {
  token?: string;
  isLoggedIn: boolean;
}

export enum AuthenticateActionTypes {
  AUTHENTICATE_REQUEST = "authenticate/authenticate_request",
  AUTHENTICATE_REQUEST_SUCCESS = "authenticate/authenticate_request_success",
  AUTHENTICATE_REQUEST_ERROR = "authenticate/authenticate_request_error",

  TOKEN_REQUEST = "authenticate/token_request",
  TOKEN_REQUEST_SUCCESS = "authenticate/token_request_success",
  TOKEN_REQUEST_ERROR = "authenticate/token_request_error",
}

export interface authenticateState {
  readonly isLoading: boolean;
  readonly data: Authenticate;
  readonly errors?: string;
}

export interface AuthenticateGraph {
  authGoogle: {
    token: string;
  };
}

export interface TokenRequestGraph {
  validateToken: {
    token: string;
  };
}
