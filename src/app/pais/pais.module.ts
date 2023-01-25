import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorSubRegionComponent } from './pages/por-subRegion/por-subRegion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PorCapitalComponent,
    PorSubRegionComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports:[
    PorCapitalComponent,
    PorSubRegionComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
