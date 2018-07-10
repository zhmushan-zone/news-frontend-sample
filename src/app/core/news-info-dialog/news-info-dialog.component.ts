import { Component, OnInit, Inject } from '@angular/core';
import { News, NewsTag } from '../../models';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-info-dialog',
  templateUrl: './news-info-dialog.component.html',
  styleUrls: ['./news-info-dialog.component.scss']
})
export class NewsInfoDialogComponent implements OnInit {

  tags = [
    {
      text: 'css',
      value: NewsTag.css
    },
    {
      text: 'css3',
      value: NewsTag.css3
    },
    {
      text: 'flash',
      value: NewsTag.flash
    },
    {
      text: 'html',
      value: NewsTag.html
    },
    {
      text: 'html5',
      value: NewsTag.html5
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public news: News,
    public dialog: MatDialog,
    public newsService: NewsService
  ) { }

  ngOnInit() {
  }

}
