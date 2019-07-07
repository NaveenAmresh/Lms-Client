import { Component, OnInit } from '@angular/core';
import {CheckconnService} from '../services/checkconn.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private _conn: CheckconnService) {
    alert('hi');
  }

  ngOnInit() {
  }

}
