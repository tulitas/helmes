import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'https://api.spaceflightnewsapi.net/v3/reports';
  constructor(private http: HttpClient) { }

  getReportList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
