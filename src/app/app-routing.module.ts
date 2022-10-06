import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  // Configuración de la ruta principal
  {
    path: '',
    component: PaisComponent,
    // Evalua todos lo valores de la URL
    pathMatch: 'full',
  },
  // Configuración de las rutas especificas
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'pais',
    component: PaisComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  // Excepción normalmente se coloca al final
  {
    path: '**',
    // Redirigir a:
    redirectTo: '',
  },
];

@NgModule({
  /* forChild: Crea un módulo con todas las directivas del enrutador y un proveedor que registra rutas, 
    sin crear un nuevo servicio de enrutador.
    forRoot: Crea y configura un módulo con todos los proveedores y directivas del enrutador. Opcionalmente,
    configura un detector de aplicaciones para realizar una navegación inicial*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
