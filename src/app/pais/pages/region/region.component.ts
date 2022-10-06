import { Component, OnInit } from '@angular/core';
import { PaisesRestResponse } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      button {
        margin-right: 6px;
      }
    `,
  ],
})
export class RegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: PaisesRestResponse[] = [];

  getClaseCSS(region: string) {
    // Evalua si se la condicion del return, de lo contrario retorna btn btn-outline-primary
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    // Si la region ya esta activa, no hará nada
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (this.paises = paises));
    // TODO: Hacer llamado del servicio
  }
}
