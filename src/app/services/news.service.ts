import { Injectable } from '@angular/core';
import { News, Response, NewsTag } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  prefix = '/api/news';

  private _news: News;
  get news() { return this._news; }
  set news(news: News) { this._news = news; }

  private _tagLimit: NewsTag[] = [];
  get tagLimit() { return this._tagLimit; }
  set tagLimit(tags: NewsTag[]) { this._tagLimit = tags; }

  constructor(
    public http: HttpClient
  ) { }

  findById(id: string) {
    return this.http.get<Response<News>>(`${this.prefix}/${id}`);
  }

  findAll() {
    return this.http.get<Response<News[]>>(`${this.prefix}`);
  }

  update(news: News) {
    return this.http.put<Response<News>>(`${this.prefix}`, news);
  }

  del(id: string) {
    return this.http.delete<Response<null>>(`${this.prefix}/${id}`);
  }

  create(news: News) {
    return this.http.post<Response<News>>(`${this.prefix}`, news);
  }
}
