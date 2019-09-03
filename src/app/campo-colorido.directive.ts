import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor: 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;
  @HostBinding('style.color') corDeTexto: string;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
    this.corDeTexto = 'white';
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
    this.corDeTexto = 'black';
  }
}
