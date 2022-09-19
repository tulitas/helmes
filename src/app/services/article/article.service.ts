import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'https://api.spaceflightnewsapi.net/v3/articles';
  constructor(private http: HttpClient) { }

  getArticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
