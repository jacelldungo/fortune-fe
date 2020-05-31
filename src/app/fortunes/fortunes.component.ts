import { MatSnackBar } from '@angular/material';
import { FortuneService } from './../fortune.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortunes',
  templateUrl: './fortunes.component.html',
  styleUrls: ['./fortunes.component.css']
})
export class FortunesComponent implements OnInit {
  public now: Date = new Date();
  public fortune;
  public newfortune;
  private fortuneId;
  
  constructor(
    private _fortune: FortuneService,
    private _snackBar: MatSnackBar) { 
      this.refreshFortune()
      setInterval(() => {
        this.now = new Date();
      }, 1);
  }
  
  refreshFortune(){
    this._fortune.getFortune().subscribe(
      (res: any) => {
        this.fortune = res.fortune
        this.fortuneId = res._id
        this.newfortune = ''
        console.log(this.fortuneId)
      }, (err: any) => {
        console.log(err)
      }
    )
  }

  replaceFortune() {
    let data = {
      fortune: this.newfortune
    }
  
    this._fortune.updateFortune(data, this.fortuneId).subscribe(
      (res: any) => {
        this.fortune = res.fortune
        this._snackBar.open(res.message)
      }, (err: any) => {
        this._snackBar.open(`Update Failed : ${err.error.details.details[0].message}`)
      }
    )

  }

  ngOnInit() {
  }

}
