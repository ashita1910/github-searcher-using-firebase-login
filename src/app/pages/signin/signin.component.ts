import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const {email, password} = f.form.value;
    console.log("form: ", f);
    this.auth.signIn(email, password).then(
      (res) => {
        this.router.navigateByUrl('/');
        this.toastr.success("Signin Successfull!");
      }
    ).catch(
      (error) => {
        this.toastr.error("Signin Failed : " + error);
        if(error.code == "auth/user-not-found") {
          this.router.navigateByUrl('signup');
        }
      }
    );
  }

}
