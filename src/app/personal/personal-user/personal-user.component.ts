import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { UserService } from '../../services/user.service';
import { ResponseCode, User, UserRole } from '../../models';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../core/confirm-dialog/confirm-dialog.component';
import { ProgressService } from '../../services/progress.service';
import { UserInfoDialogComponent } from '../../core/user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'app-personal-user',
  templateUrl: './personal-user.component.html',
  styleUrls: ['./personal-user.component.scss']
})
export class PersonalUserComponent implements OnInit {

  users: User[] = [];
  dataSource: MatTableDataSource<User>;
  selection = new SelectionModel<User>(true, []);
  displayedColumns: string[] = ['select', 'id', 'username', 'role', 'createAt', 'updateAt'];

  initial() {
    this.userService.findAll().subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.users = res.data;
          this.dataSource = new MatTableDataSource<User>(this.users);
          break;
        case ResponseCode.NO_PERMISSION:
          this.router.navigate(['/index']);
          break;
      }
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.filter(row => this.canSelected(row)).length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.canSelected(row) && this.selection.select(row));
  }

  canSelected(user: User) {
    return this.userService.user && this.userService.user.role < user.role;
  }

  del() {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: <ConfirmDialogData>{
        title: '删除',
        content: `你确定要删除这 ${this.selection.selected.length} 名用户吗?`
      }
    });
    confirmDialog.afterClosed().subscribe(async res => {
      if (res) {
        this.progressService.isShow = true;
        for (const u of this.selection.selected) {
          await this.userService.del(u.id).subscribe(resp => {
            switch (resp.code) {
              case ResponseCode.SUCCESS:
                this.users.splice(this.users.findIndex(v => v.id === u.id), 1);
                this.dataSource.data = [...this.users];
                this.selection.deselect(u);
            }
          });
          await new Promise(resolve => setTimeout(resolve, 500)); // 增加等待时间, 留下优化空间.
        }
        this.progressService.isShow = false;
      }
    });
  }

  edit() {
    const user = this.selection.selected[0];
    const userInfoDialog = this.dialog.open(UserInfoDialogComponent, {
      data: new User(user),
      disableClose: true
    });
    userInfoDialog.afterClosed().subscribe(async (res: User) => {
      if (res) {
        this.progressService.isShow = true;
        await this.userService.update(res).subscribe(resp => {
          switch (resp.code) {
            case ResponseCode.SUCCESS:
              this.users.splice(this.users.findIndex(u => u.id === resp.data.id), 1, resp.data);
              this.dataSource.data = [...this.users];
              this.selection.clear();
              this.selection.select(resp.data);
              localStorage.setItem('token', resp.data.token);
              this.snackBar.open('修改成功');
              break;
            case ResponseCode.NOT_EXISIT:
              this.snackBar.open('用户不存在');
              break;
            case ResponseCode.NO_PERMISSION:
              this.snackBar.open('权限不足');
              break;
          }
        });
        await new Promise(resolve => setTimeout(resolve, 500)); // 增加等待时间, 留下优化空间.
        this.progressService.isShow = false;
      }
    });
  }

  userRole(role: UserRole) {
    let roleStr = '普通用户';
    switch (role) {
      case UserRole.USER:
        break;
      case UserRole.ADMIN:
        roleStr = '管理员';
        break;
      case UserRole.SUPER:
        roleStr = '超级管理员';
        break;
    }
    return roleStr;
  }

  constructor(
    public userService: UserService,
    public router: Router,
    public dialog: MatDialog,
    public progressService: ProgressService,
    public snackBar: MatSnackBar
  ) {
    this.initial();
  }

  ngOnInit() { }

}
