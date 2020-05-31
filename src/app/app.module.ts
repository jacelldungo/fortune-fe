import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FortunesComponent } from './fortunes/fortunes.component';
import { RegisterComponent } from './register/register.component';


import { 
  MatCardModule, 
  MatButtonModule, 
  MatInputModule, 
  MatIconModule, 
  MatSnackBarModule,
  MatExpansionModule,
  MatTooltipModule

} from '@angular/material';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FortunesComponent,
    RegisterComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
