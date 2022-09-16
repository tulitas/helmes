import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'https://api.spaceflightnewsapi.net/v3/blogs';
  constructor(private http: HttpClient) { }

  getBlogList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
