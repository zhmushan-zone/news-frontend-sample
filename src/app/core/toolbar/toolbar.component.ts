import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsTag } from '../../models';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  menuClick = new EventEmitter();

  newsTag = NewsTag;

  getTags() {
    return Object.keys(NewsTag).filter(k => isNaN(Number(k)));
  }

  constructor(
    public newsService: NewsService
  ) { }

  ngOnInit() {
    for (const k of this.getTags()) {
      this.newsService.tagLimit.push(NewsTag[k]);
    }
  }
}
