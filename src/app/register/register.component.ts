import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {

  registerUserData = {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private _auth: AuthService, 
    private _snackBar: MatSnackBar,
    private _router: Router) { 
      if (_auth.loggedIn()) {
      _router.navigateByUrl('/home')
    } 
  }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token)
          this._snackBar.open(`User has been successfully registered`)
          this._router.navigateByUrl('/home')
        },
        (err: any) => {
          console.log(err)
          this._snackBar.open(err.error.message)
        }
      )
  }

}
