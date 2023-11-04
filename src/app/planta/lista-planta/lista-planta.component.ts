import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-lista-planta',
  templateUrl: './lista-planta.component.html',
  styleUrls: ['./lista-planta.component.css']
})
export class ListaPlantaComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  obtenerPlantas(): void {
    this.plantaService.obtenerPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  contarPlantasInteriores(): number {
    // Filtra las plantas que tienen tipo "Interior" y cuenta cuántas son
    return this.plantas.filter(planta => planta.tipo === 'Interior').length;
  }

  contarPlantasExterior(): number {
    // Filtra las plantas que tienen tipo "Exterior" y cuenta cuántas son
    return this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.obtenerPlantas();
  }

}
