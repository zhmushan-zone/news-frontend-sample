import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';
import { NewsRoutingModule } from './news.routes';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule
  ],
  declarations: [NewsComponent, NewsDetailsComponent]
})
export class NewsModule { }
