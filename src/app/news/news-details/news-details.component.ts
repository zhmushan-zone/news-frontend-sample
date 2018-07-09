import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { News, ResponseCode } from '../../models';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  news: News;

  constructor(
    public activatedRoute: ActivatedRoute,
    public newsService: NewsService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.newsService.findById(id).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.news = res.data;
          break;
        case ResponseCode.NOT_EXISIT:
          break;
      }
    });
  }

}
