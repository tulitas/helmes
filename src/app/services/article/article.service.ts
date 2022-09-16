import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../../models/article/article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'https://api.spaceflightnewsapi.net/v3/articles';
  private baseUrl1 = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=';
  constructor(private http: HttpClient) { }

  getArticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getArticlesByNum(num: string): Observable<any>{
    return this.http.get(`${this.baseUrl1}${num}`);
  }
}
