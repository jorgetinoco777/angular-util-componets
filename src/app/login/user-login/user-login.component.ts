import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Constants
import { TOKEN_NAME } from '../../global.data/var.constants';

//Services
import { AuthIntegrationsCoreService } from '../../services/auth-integrations-core.service';
import { UserPos } from '../../models/UserPos';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  loginForm: FormGroup;
  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthIntegrationsCoreService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.maxLength(5)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });

    let token = localStorage.getItem(TOKEN_NAME);
    if(token) {
      // Go to /Home
      this.router.navigate(["/home"]);
    }
  }

  login(): void {
    //Get username
    this.username = this.loginForm.get('username').value;
    //Get password
    this.password = this.loginForm.get('password').value;
    //Validar username y password

    if(this.username.length > 5 && this.password.length > 3) {
      //Services userAuthentification
      this.auth.userAuthentification(this.username, this.password).subscribe(data => {
        //console.log(data);
        localStorage.setItem(TOKEN_NAME, data.access_token);
        // let token = localStorage.getItem(TOKEN_NAME);
        // if(!token) {
          //Save token in session storage
          // localStorage.setItem(TOKEN_NAME, token);
        // }
        //Go to /Home
        this.router.navigate(["/home"]);
      }, error => {
        console.log(error);
      });
    } else {
      //Alerta: requiered username and password
      console.log("Usuario y contraseña requeridos");
    }

  }

}
