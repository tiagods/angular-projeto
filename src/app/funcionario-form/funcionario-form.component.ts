import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent{
  nome = 'Tiago';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();
  ultimoId = 0;

  adicionar() {
    this.adicionado = true;
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };
    // comunicação de componentes
    this.funcionarioAdicionado.emit(funcionario);
  }
}
