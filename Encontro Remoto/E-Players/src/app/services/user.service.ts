import { HttpClient, HttpHeaders } from '@angular/common/http'; //importo do http client
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';//import do user

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    //injeção de dependencia do modulo httpClient dentro dos parenteses
    private httpClient: HttpClient
  ) { }

  urlLogin ="http://localhost:3000/signin"
  //post de login - insomnia
    logarUsuario (usuario:User):Observable<any>{
      return this.httpClient.post(this.urlLogin,JSON.stringify(usuario), {
        headers:new HttpHeaders({"Content-Type":"application/json",
          "Accept-Charset":"utf-8"}),
        observe:"response"
      })//tem que ter a url, body, objeto de configuração
    }
}
