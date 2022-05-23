import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  userName: string = "";
  error = null;

  constructor(private ref: ChangeDetectorRef, private githubService: GithubService) { }

  ngOnInit(): void {
  }

  findUser() {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
        this.userName = "";
      },
      (error) => {
        this.error = error;
        this.user = null;
        this.ref.detectChanges();
        this.userName = "";
      }
    );
  }

}
