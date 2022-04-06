export interface LoginRequest {
  readonly email: string;
  readonly password: string;
}
export interface Token {
  readonly access_token: string;
  readonly token_type: string;
  readonly refresh_token: string;
  readonly expires_in: number;
  readonly scope: string;
  readonly jti: string;
}
