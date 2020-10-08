export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: 'M' | 'F';
  age: number;
}

export interface UserDetail extends User {
  level: 'intern' | 'junior' | 'senior';
}

export interface UsersState {
  users: User[] | null;
  userDetail: UserDetail | null;
}
