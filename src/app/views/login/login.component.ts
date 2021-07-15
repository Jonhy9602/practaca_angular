import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { login } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel: login = new login('', '');

  //contador:number = 0;

  constructor(private loginServicio: LoginService) {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.contador++;
      //this.contador = this.contador + 1;
      // this.contador += this.contador;
    }, 5000);
  }
  formularioenviado() {
    console.log('se esta enviando el formulario');
    console.log(this.loginModel.correo);
    console.log(this.loginModel.password);
    //alert('formulario enviado');
    this.loginServicio.hacerLogin(this.loginModel).subscribe(
      (res) => {
        console.log(
          'Finalizo el login, y el servidor responde. Lo que el servidor responda viene en "res "'
        );
      },
      (err) => {
        console.log('Finalizo el login, y el servidor no responde con errores');
        console.log('En err esta la razon del error');
        console.log(err);
      },
      () => {
        console.log('Finalizo la accion de hacer login');
      }
    );
  }
}
