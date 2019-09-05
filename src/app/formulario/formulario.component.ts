import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresario', 'Outros'];

  salvar(form: NgForm) {
    console.log(form.value);
    console.log(this.cliente);
    console.log('Salvo com sucesso!');
    form.reset({ profissao: '' });
  }
}


class Cliente {
  nome: string;
  email: string;
  profissao: string;
}
