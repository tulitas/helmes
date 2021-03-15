
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {ReportListComponent} from './report-list/report-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'reports', component: ReportListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
