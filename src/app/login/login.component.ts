import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerUserData = {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private _auth: AuthService, 
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { 
    if (_auth.loggedIn()) {
      _router.navigateByUrl('/home')
    } 
  }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.registerUserData)
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token)
          this._router.navigateByUrl('/home')
        },
        (err: any) => {
          console.log(err)
          this._snackBar.open(`Login failed please register or ${err.error.details}`)
        }
      )
  }

}
