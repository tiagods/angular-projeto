import { Inject } from '@angular/core';

export class LogService2 {

  constructor(@Inject('LogPrefixo') private prefixo: string) {}

  log(msg: string) {
    console.log(`${this.prefixo}: ${msg}`);
  }
}
