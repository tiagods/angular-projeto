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

@NgModule({
  declarations: [
    AppComponent, HelloComponent, BemVindoComponent, FuncionarioCardComponent,
    FuncionarioFormComponent, CampoColoridoDirective, FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  salvar() {
    console.log('salvando');
  }
 }
