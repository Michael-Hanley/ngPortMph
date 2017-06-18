import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
coins:Array<any>;
errorMessage: string;
  constructor(private dataService:DataService) {}
  getCoins(){
    this.dataService.getCoins()
      .subscribe((coins) => {
        this.coins = coins;
        console.log(this.coins);
      });
  }
  ngOnInit() {
    this.getCoins();
  }

}
