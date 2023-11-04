import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ListaPlantaComponent } from './lista-planta.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('ListaPlantaComponent', () => {
  let component: ListaPlantaComponent;
  let fixture: ComponentFixture<ListaPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListaPlantaComponent],
      providers: [PlantaService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

beforeEach(() => {
  fixture = TestBed.createComponent(ListaPlantaComponent);
  component = fixture.componentInstance;

  for(let i = 0; i < 3; i++){
    const planta = new Planta(
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.number.int(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );
    component.plantas.push(planta);
  }
  fixture.detectChanges();
  debug = fixture.debugElement;
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 table rows', () => {
    const tableRows = debug.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(3); /* Pruebo registros de la tabla */
  });

  it('should have 4 table title head columns', () => {
    const tableColumns = debug.queryAll(By.css('thead th'));
    expect(tableColumns.length).toBe(4); /* Pruebo columnas del titulo de la tabla */
  });

  it('should have 1 table head', () => {
    const tableColumns = debug.queryAll(By.css('thead'));
    expect(tableColumns.length).toBe(1); /* Pruebo encabezado de la tabla */
  });

  it('should have 2 totalizadorPlantas elements', () => {
    const totalizadorPlantasElements = debug.queryAll(By.css('.totalizadorPlantas'));
    expect(totalizadorPlantasElements.length).toBe(2); /* Pruebo totalizadores de plantas */
  });

});
