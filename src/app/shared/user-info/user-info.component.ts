import { Component, OnInit, Input } from '@angular/core';
import { User, UserSex } from '../../models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  user: User;
  userSex = UserSex;

  constructor() { }

  ngOnInit() {
  }

}
