import { logging } from 'protractor';
import { LogService } from './../log.service';
import { FuncionarioService } from './../funcionario.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService
    ) {
    }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);
    this.logService.log(`Adicionando ${nome}`);
  }
}
