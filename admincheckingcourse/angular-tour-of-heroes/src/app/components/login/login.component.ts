import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  data: any = {}
  constructor(
    private router: Router,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



  SubmitdDataOne() {
    console.log(this.data)
    const data = this.data
    this.router.navigate(['profile'])
  }

}
