import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { FortunesComponent } from './fortunes/fortunes.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'fortune',
    component: FortunesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: MainpageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
