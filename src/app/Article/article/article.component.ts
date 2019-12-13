import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {ArticleInfo} from '../../auth/article-info';
import { SignUpInfo } from '../../auth/signup-info';
import { FormGroup,FormBuilder, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleForm: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  articleinfo:ArticleInfo;
  //articleForm:FormGroup;
  submitted = false;
  dataArticle:Array<any>;
  errorMessage = '';
  constructor(private authService: AuthService,private formBuilder: FormBuilder) {   
   }
  languageid = [
    {id: 1, name: "EN"},
    {id: 2, name: "FR"}
  ];
 selectedValue = null;

 categories=[
    {id:1,name:"economie"},
    {id:2,name:"technologie"},
    {id:3,name:"entreprise"},
    {id:4,name:"lifestyle"}
]


  ngOnInit() {
    //this.authService.getArticle().subscribe(data=>{this.dataArticle=data});

  //   this.articleForm=this.formBuilder.group({
  //     'title':[this.articleinfo.title,[Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
  //     'content':[this.articleinfo.content,Validators.required],
  //     'language':[this.articleinfo.language,Validators.required],
  //     'category':[this.articleinfo.category,Validators.required],
  //     'tags':[this.articleinfo.tags,Validators.required]
  // });
}
//   resetForm(form: any) {
//     this.submitted = false;
//     form.reset();
// }

// submitForm(form: any) {
//   if (form.valid) {
//       this.submitted = true;
//   } else {
//       this.validateForm(form);
//   }
// }
// hasErrors(field: any) {
//   return (this.articleForm.get(field).invalid && this.articleForm.get(field).touched && this.articleForm.get(field).errors);
// }
// validateForm(form: any) {
//   Object.keys(form.controls).forEach(field => {
//       const control = form.get(field);
//       if (control instanceof FormControl) {
//           control.markAsTouched({ onlySelf: true });
//       } else if (control instanceof FormGroup) {
//           this.validateForm(control);
//           this.authService.AuthpostArticle(this.articleinfo).subscribe(data=>{
//                   console.log(data);
//                   this.isSignedUp = true;
//                 },
//                 error=>{
//                   console.log(error);
//                   this.errorMessage=error.error.message;
//                   this.isSignUpFailed = true;
//                 }
//           );
//         }
//   });
// }


// get title() { return this.articleForm.get('title'); }
// get content(){return this.articleForm.get('content');}

  // get f() {
  //    return this.articleForm.controls;
  //    }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPass').value;
  return pass === confirmPass ? null : { notSame: true }     
}
  onSubmit(){
    console.log(this.articleForm);
    this.articleinfo=new ArticleInfo(
      this.articleForm.title,
      this.articleForm.content,
        //this.articleForm.author,
        this.articleForm.language,
        this.articleForm.category,
        this.articleForm.tags
    );
    const langstr='{"language":"<anystring>"}';
    let lang=JSON.parse(langstr);
    console.log(lang);
    
    this.authService.AuthpostArticle(this.articleinfo).subscribe(
      data=>{
        console.log(data);
        const objstr=JSON.stringify(data);
        console.log(objstr);
        //console.log(this.articleinfo.language);
        //this.isSignedUp = true;
      },
      error=>{
        console.log(error);
        this.errorMessage=error.error.message;
        //this.isSignUpFailed = true;
      }
    )
  }
}
