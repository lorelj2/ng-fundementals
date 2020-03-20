import {Injectable} from '@angular/core';

interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

@Injectable()
export class AuthService {

  authenticatedUser: IUser;

  login(username: string, password: string) {
    this.authenticatedUser = {
      id: 1,
      username: 'UserName',
      firstName: 'Test',
      lastName: 'test'
    };
  }

  isAuthenticated() {
    return !!this.authenticatedUser;
  }

}
