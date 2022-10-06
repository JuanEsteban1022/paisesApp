import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesRestResponse } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  // Pais puede ser un valor nulo
  pais!: PaisesRestResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // Metodo 1:
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.obtenerIdPais(id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais[0]));

    // Metodo 2:
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   // Desestructuración
    //   console.log(id);
    //   this.paisService.obtenerIdPais(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
