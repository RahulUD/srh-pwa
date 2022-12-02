export interface baseComment {
  user: string;
  blog: string;
  comment: string;
}
export interface responseComment {
  _id : string;
user : string;
blog : string;
comment : string;
createdAt : string;
updatedAt : string;
__v : string;
}

export interface responseLikeType {
  _id : string;
  user : any;
  blog : string;
  createdAt : string;
  updatedAt : string;
  __v : string;
}