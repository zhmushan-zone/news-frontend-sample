import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { News, ResponseCode, UserRole } from '../../models';
import { SelectionModel } from '@angular/cdk/collections';
import { NewsService } from '../../services/news.service';
import { UserService } from '../../services/user.service';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../core/confirm-dialog/confirm-dialog.component';
import { ProgressService } from '../../services/progress.service';
import { NewsInfoDialogComponent } from '../../core/news-info-dialog/news-info-dialog.component';
import { CreateNewsDialogComponent } from '../../core/create-news-dialog/create-news-dialog.component';

@Component({
  selector: 'app-personal-news',
  templateUrl: './personal-news.component.html',
  styleUrls: ['./personal-news.component.scss']
})
export class PersonalNewsComponent implements OnInit {

  newses: News[] = [];
  dataSource: MatTableDataSource<News>;
  selection = new SelectionModel<News>(true, []);
  displayedColumns: string[] = ['select', 'id', 'title', 'tags', 'createAt', 'updateAt'];

  initial() {
    this.newsService.findAll().subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.newses = res.data;
          this.dataSource = new MatTableDataSource<News>(this.newses);
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

  canSelected(news: News) {
    return this.userService.user && (this.userService.user.id === news.authorId || this.userService.user.role === UserRole.SUPER);
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
                this.newses.splice(this.newses.findIndex(v => v.id === u.id), 1);
                this.dataSource.data = [...this.newses];
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
    const news = this.selection.selected[0];
    const userInfoDialog = this.dialog.open(NewsInfoDialogComponent, {
      data: new News(news),
      disableClose: true
    });
    userInfoDialog.afterClosed().subscribe(async (res: News) => {
      if (res) {
        this.progressService.isShow = true;
        await this.newsService.update(news).subscribe(resp => {
          switch (resp.code) {
            case ResponseCode.SUCCESS:
              this.newses.splice(this.newses.findIndex(n => n.id === resp.data.id), 1, resp.data);
              this.dataSource.data = [...this.newses];
              this.selection.clear();
              this.selection.select(resp.data);
              this.snackBar.open('修改成功');
              break;
            case ResponseCode.NOT_EXISIT:
              this.snackBar.open('新闻不存在');
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

  create() {
    const createUserDialog = this.dialog.open(CreateNewsDialogComponent);
    createUserDialog.afterClosed().subscribe(n => {
      if (n) {
        this.newses.push(n);
        this.dataSource.data = [...this.newses];
      }
    });
  }

  constructor(
    public newsService: NewsService,
    public userService: UserService,
    public dialog: MatDialog,
    public progressService: ProgressService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initial();
  }

}
