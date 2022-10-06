import { Component } from '@angular/core';
import { PaisesRestResponse } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
})
export class CapitalComponent {
  termino: string = '';
  error: boolean = false;
  paises: PaisesRestResponse[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe(
      (capital) => {
        this.paises = capital;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }
}
