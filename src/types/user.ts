export interface baseUser {
  name: string;
  email: string;
  avatar: string;
  user_type?: string;
  password ?: string;
  date_of_birth?: Date;
  provider?: string;
  providerId?: string;
}
export interface signUpFormData {
  name : string | null | undefined,
  email: string | null | undefined,
  password : string | null | undefined
}