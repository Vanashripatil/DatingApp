import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import {  HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Member } from "../_models/member";



@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }


  getMembers()
  {
    return this.http.get<Member []>(this.baseUrl + 'user');
  }

  getMember(username: string)
  {
    return this.http.get<Member>(this.baseUrl + 'user/' + username);
  }
}
