import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {ArticleInfo} from '../../auth/article-info'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  form: any = {};
  articleinfo:ArticleInfo;
  errorMessage = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form);
    this.articleinfo=new ArticleInfo(
      this.form.title,
      this.form.content,
      this.form.author,
      this.form.language,
      this.form.category,
      this.form.tags
    )
    this.authService.AuthpostArticle(this.articleinfo).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
        this.errorMessage=error.error.message;
      }
    )
  }
}
