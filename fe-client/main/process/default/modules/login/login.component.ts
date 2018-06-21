import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { Observable } from 'rxjs/Observable';
//import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class FeLoginComponent implements OnInit {
  @ViewChild('f') loginForm : NgForm;

  userData = { 
      username:'',
      password:'' 
    };

  submitted:boolean = false;
  
   constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.http.get('/profile')
    // .subscribe(res=>{console.log("Get login");
    // });
  }

  login(username,password){
    this.submitted=true;
    this.userData.username = this.loginForm.value.username;
    this.userData.password = this.loginForm.value.password;
    
 //   this.auth.login(this.userData);

    this.router.navigateByUrl('/profile');
    console.log(this.userData);
  }
    
}
