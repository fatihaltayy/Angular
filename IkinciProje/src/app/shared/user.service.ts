import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);


  getUser(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

}
