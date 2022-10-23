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
