import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Report} from '../models/report/report';
import {ReportService} from '../services/report/report.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
reports: Observable<Report[]>;
  constructor(private reportService: ReportService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.reports = this.reportService.getReportList();
  }
}
