import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Tiago Dias';
  dataAniversario = new Date(1990, 11, 18);
  preco = 1800.32;
  troco = 0.57762;

  funcionarios = [];
  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }

}
