export interface IUserResponse {
  message: string;
  ok: boolean;
  user?: {
    id: number;
    firstName: string;
    lastName: string;
  };
}
