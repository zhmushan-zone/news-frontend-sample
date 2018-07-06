import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Menu {
  link: string;
  title: string;
}

export enum NavMode {
  nav,
  login,
  personalCenter
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output()
  linkClick = new EventEmitter<NavMode>();

  navMode = NavMode;

  menus: Menu[] = [
    {
      link: 'index',
      title: '主页'
    },
    {
      link: 'info',
      title: '消息'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
