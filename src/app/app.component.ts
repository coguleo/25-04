import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public usuario: any;

  constructor(private router: Router,
      private route: ActivatedRoute){
    console.log('iniciando');
    this.usuario = localStorage.getItem('usuario');
    if (this.usuario != null ){
      //vai navegar para a tela principal
       this.router.navigate(['/principal']);
    }else {
      //vai navegar para a tela de login
       this.router.navigate(['/login']);
    }
  }
}
