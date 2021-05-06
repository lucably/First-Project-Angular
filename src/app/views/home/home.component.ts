import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  public goToUsers() {
    if(this.value.length > 0) this.router.navigate(['/listaUsuario',{dados: this.value}]);
    else alert('Insira algum usuário!');
  }

  public value: String = '';

  ngOnInit(): void {}

}
