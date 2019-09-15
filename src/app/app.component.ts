import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nome = 'Tiago Dias';
  dataAniversario = new Date(1990, 11, 18);
  preco = 1800.32;
  troco = 0.57762;

  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }

}
