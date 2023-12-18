import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  baseUrl = 'http://localhost:5000';

  constructor(public httpClient: HttpClient) { }


  getInformation(){
    this.httpClient.get(`${this.baseUrl}/`)
  }
}
