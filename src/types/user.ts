export interface baseUser {
  _id: any;
  name: string;
  email: string;
  avatar: string;
  user_type?: string;
  password?: string;
  date_of_birth?: Date;
  provider?: string;
  providerId?: string;
  verified : boolean
}
export interface signUpFormData {
  name: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
}

export interface forgotPasswordFormData {
  email: string | null | undefined;
}
export interface resetPasswordFormData {
  password: string | null | undefined;
  token: string | null | undefined;
}

export interface responseType {
  status: number;
  message: string | null;
  isSuccess: boolean;
  resId?: string
}
