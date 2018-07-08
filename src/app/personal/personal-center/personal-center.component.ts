import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, ResponseCode } from '../../models';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.scss']
})
export class PersonalCenterComponent implements OnInit {

  user: User;

  save() {
    this.userService.update(this.user).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.userService.user = res.data;
          break;
        case ResponseCode.NO_PERMISSION:
          this.snackBar.open('权限不足');
          break;
        case ResponseCode.NOT_EXISIT:
          this.snackBar.open('用户不存在');
          break;
      }
    });
  }

  constructor(
    public userService: UserService,
    public snackBar: MatSnackBar
  ) {
    this.user = new User(userService.user);
  }

  ngOnInit() {
  }

}
