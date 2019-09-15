import { LogService } from './log.service';
import { FuncionarioService } from './funcionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { HelloComponent } from './hello/hello.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FuncionarioAbreviadoService } from './funcionario.abreviado.service';

const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
};

@NgModule({
  declarations: [
    AppComponent, HelloComponent, BemVindoComponent, FuncionarioCardComponent,
    FuncionarioFormComponent, CampoColoridoDirective, FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [{
    // provide: FuncionarioService, useClass: FuncionarioService} useClass me dara a instancia de qual a classe que quero usar
    // provide: FuncionarioService, useClass: FuncionarioAbreviadoService}
    provide: FuncionarioService, useFactory: criarFuncionarioService},
    LogService,
    {provide: 'LogPrefixo', useValue: 'Log'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  salvar() {
    console.log('salvando');
  }
 }
