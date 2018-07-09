import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News, ResponseCode } from '../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newses: News[] = [];

  constructor(
    public newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.findAll().subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.newses = res.data;
          break;
      }
    });
  }

}
