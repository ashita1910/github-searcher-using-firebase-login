import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const {email, password} = f.form.value;
    console.log("form: ", f);
    this.auth.signUp(email, password).then(
      (res) => {
        this.router.navigateByUrl('/');
        this.toastr.success("Signup Successfull!");
      }
    ).catch(
      (error) => {
        this.toastr.error("Signup Failed : " + error);
      }
    );
  }

}
