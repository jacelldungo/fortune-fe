import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FortuneService {

  private _fortuneURL = "http://localhost:3000/fortune"

  constructor( private http: HttpClient) {}

  getFortune(){
    return this.http.get(this._fortuneURL)
  }

  updateFortune(data, id) {
    return this.http.patch(`${this._fortuneURL}/${id}`, data)
  }
}
