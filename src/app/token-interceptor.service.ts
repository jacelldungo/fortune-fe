import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor{
 
  constructor(private injector: Injector) {}

  intercept(req, next) {
    let authservice = this.injector.get(AuthService)
    let tokenReq = req.clone({
      setHeaders: {
          Authorization: `Bearer ${authservice.getToken()}` 
      }
    })

    return next.handle(tokenReq)
  }
}
