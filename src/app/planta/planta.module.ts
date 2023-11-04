import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPlantaComponent } from './lista-planta/lista-planta.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ListaPlantaComponent],
  exports: [ListaPlantaComponent]
})
export class PlantaModule { }
