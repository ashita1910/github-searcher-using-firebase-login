import { ChangeDetectorRef, Component, Input, OnInit, OnChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit, OnChanges {

  @Input() repoUrl: string = "";
  repos: any = [];

  constructor(private ref: ChangeDetectorRef, private githubService: GithubService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.githubService.getRepos(this.repoUrl).subscribe(
      (repos: any) => 
      {
        this.repos = repos
        this.ref.detectChanges();
      }
    );
  }

}
