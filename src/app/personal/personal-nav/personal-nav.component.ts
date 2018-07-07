import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserRole } from '../../models';

@Component({
  selector: 'app-personal-nav',
  templateUrl: './personal-nav.component.html',
  styleUrls: ['./personal-nav.component.scss']
})
export class PersonalNavComponent implements OnInit {

  userRole = UserRole;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
