import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  title: string = 'Settings';
  color1: any = 'red';
  color2: any = 'blue';
  constructor() { }

  ngOnInit() {
  }

}
