export interface User {
  id?: number;  // O campo id é opcional porque ele é gerado no back-end
  nome: string;
  cpf: string;
  genero: string;
  nascimento: Date | undefined;
  telefone: string;
  email: string;
  endereco: string;
  latitude: string;
  longitude: string;
  password: string;
  roles: string[];
}
