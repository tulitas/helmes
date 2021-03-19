import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Article} from '../models/article/article';
import {ArticleService} from '../services/article/article.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;
  num: string;

  constructor(private articleService: ArticleService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
this.reloadData();
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
  this.articles = this.articleService.getArticleList();
  }
  // tslint:disable-next-line:typedef
  getArticlesByNum(){
    this.articles = this.articleService.getArticlesByNum(this.num);

  }
}
