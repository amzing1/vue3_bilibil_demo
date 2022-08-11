export interface User {
  _id: string,
  name: string,
  email: string,
  age?: number,
  role?: UserRole
}
export enum UserRole {
  'user',
  'admin'
}