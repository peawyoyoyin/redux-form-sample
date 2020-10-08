import { MockeryPromise } from "./common";


interface UserPreview {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'M' | 'F';
}

interface User extends UserPreview {
  level: 'intern' | 'senior' | 'junior'
}

class UserService {
  private users: User[]

  constructor() {
    this.users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Appleseed',
        age: 23,
        gender: 'M',
        level: 'intern'
      },
      {
        id: 2,
        firstName: 'Jim',
        lastName: 'Kinder',
        age: 32,
        gender: 'F',
        level: 'junior'
      }
    ];

    // this.getUsers = this.getUsers.bind(this);
    // this.addUsers = this.addUsers.bind(this);
  }

  public addUsers(user: User): Promise<void> {
    return MockeryPromise((resolve, _reject) => {
      this.users.push(user);
      resolve();
    }, { delay: 500 });
  }

  public getUsers = (): Promise<UserPreview[]> => {
    return MockeryPromise((resolve, _reject) => {
      resolve(this.users.map(this.mapUserPreview));
    }, { delay: 900 });
  }

  public getUserById = (id: number): Promise<User> => {
    return MockeryPromise((resolve, reject) => {
      const user = this.users.find(user => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject('user does not exist');
      }
    }, { delay: 700 });
  }
  
  private mapUserPreview = (user: User): UserPreview => {
    const {
      firstName,
      lastName,
      age,
      gender,
      id
    } = user;
    
    return {
      firstName,
      lastName,
      age,
      gender,
      id
    };
  } 
}

export const userService = new UserService();
