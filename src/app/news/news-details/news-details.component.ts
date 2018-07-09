import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News, ResponseCode, User } from '../../models';
import { NewsService } from '../../services/news.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  news: News;
  author: User;

  async initial() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const newsResp = await this.newsService.findById(id).toPromise();
    switch (newsResp.code) {
      case ResponseCode.SUCCESS:
        this.news = newsResp.data;
        break;
      case ResponseCode.NOT_EXISIT:
        break;
    }
    this.userService.findById(this.news.authorId).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.author = res.data;
          break;
        case ResponseCode.NOT_EXISIT:
          break;
      }
    });
  }

  constructor(
    public activatedRoute: ActivatedRoute,
    public newsService: NewsService,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.initial();
  }

}
