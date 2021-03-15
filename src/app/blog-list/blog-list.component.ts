import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Blog} from '../models/blogs/blog';
import {BlogService} from '../services/blog/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Observable<Blog[]>;

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.blogs = this.blogService.getBlogList();
  }
}
