import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'https://test.spaceflightnewsapi.net/api/v2/articles';
  private baseUrl1 = 'https://test.spaceflightnewsapi.net/api/v2/articles?_limit=';
  constructor(private http: HttpClient) { }

  getArticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getArticlesByNum(num: string): Observable<any>{
    console.log(num);
    return this.http.get(`${this.baseUrl1}${num}`);
  }
}
