import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisesRestResponse } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PaisComponent {
  termino: string = '';
  error: boolean = false;
  paises: PaisesRestResponse[] = [];
  paisesSugeridos: PaisesRestResponse[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
    // TODO: Crear sugerencias
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
