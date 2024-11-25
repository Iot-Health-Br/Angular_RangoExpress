export interface LoginResponse {
  userId?: number;
  authenticated: boolean;
  message: string;
  cpf: string | null;
  fullName: string;
  roles: string[] | null;
  endereco: string;
  latitude: string;
  longitude: string;
}
