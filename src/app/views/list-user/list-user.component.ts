import { GithubService } from './../../shared/services/github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private githubServices: GithubService,
    private router: Router
  ) { }

    public value: String = '';
    public arrayDataUser: any = [];

  ngOnInit(): void {
    this.value = this.route.snapshot.paramMap.get('dados');
    this.getRepos();
  }

  public goToHome() {
    this.router.navigate(['/']);
  }

  public getRepos(){
    this.githubServices.getReposFromUser(this.value).subscribe(data => {
      this.arrayDataUser = data;
    });
  }

}
