export interface LoginResponse {
  userId?: number;
  authenticated: boolean;
  message: string;
  cpf: string | null;
  fullName: string;
  roles: string[] | null;
}
