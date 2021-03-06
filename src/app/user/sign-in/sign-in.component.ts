import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages!: string;
  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/adminhome');
  }
  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      (res:any) => {
        this.userService.setToken(res['token']);
        if(res.role=='admin'){
          this.router.navigateByUrl('/adminhome');
        }
        else{
          this.router.navigateByUrl('/customer');
        }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
