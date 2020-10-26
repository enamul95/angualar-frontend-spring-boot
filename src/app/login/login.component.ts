import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='enamul@gmail.com'
  password =''
  errorMessage = "Invalid Credential"
  invalidLogin = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username ==='enamul@gmail.com' && this.password ==='dummy'){
      this.router.navigate(["welcome",this.username])
      this.invalidLogin  = false
    }else{
      this.invalidLogin = true
    }
    
  
  }

}
