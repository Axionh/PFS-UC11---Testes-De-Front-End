import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  urlLogin = "http://localhost:3000/login"

  logarUsuario (usuario:User):Observable<any>{
    return this.httpClient.post(this.urlLogin,JSON.stringify(usuario), {
      headers:new HttpHeaders({"Content-Type":"application/json",
        }),
      observe:"response"
    })//tem que ter a url, body, objeto de configuração
  }
}
