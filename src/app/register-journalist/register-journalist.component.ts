import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfojournalist } from '../auth/signup-info-journalist';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-register-journalist',
  templateUrl: './register-journalist.component.html',
  styleUrls: ['./register-journalist.component.css']
})
export class RegisterJournalistComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfojournalist;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }

  @ViewChild('fileInput') fileInput: ElementRef;
 
  uploader: FileUploader;
  isDropOver: boolean;

  ngOnInit() {
  }
  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }
 
  fileClicked() {
    this.fileInput.nativeElement.click();
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfojournalist(
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.actualentreprise,
      this.form.nationality,
      this.form.experience,
      this.form.nom,
      this.form.prenom,
      this.form.numtel,
      this.form.datenaiss,
      this.form.motivationtxt,
      this.form.cv,
      this.form.portefolio
      );

      

    this.authService.signUpJournalist(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
