import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any;

  constructor(private auth: AuthService, private toastr: ToastrService, private router :Router) { 
    this.auth.getUser().subscribe((user) => this.email = user?.email);
  }

  ngOnInit(): void {
  }

  async handleSignOut() {
    try {
      await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.email = null;
      this.toastr.success("Login again to continue!");
    } catch (error) {
      this.toastr.error("Something is wrong!" + error);
    }
  }

}
