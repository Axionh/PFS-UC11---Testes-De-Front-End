import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }




  // nossas variáveis e métodos
  userModel = new User()
  mensagem =""
  receberDados() {
    console.log(this.userModel);

    //disparando SEND de logar usuário
    this.userService.logarUsuario(this.userModel).subscribe({
      next: (response)=> {//sucesso, login correto
        console.log("Deu certo");
        console.log(response);
        this.mensagem ="Logado com sucesso"
      },   
      error: (err)=>{//erro ao logar
        console.log("Deu erro");
        console.log(err);
        this.mensagem = err.error;
      }, 
    })
  }

  

  teste() {
    this.userModel.email = "Coca-Cola"
  }

}
