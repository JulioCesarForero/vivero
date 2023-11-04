import { TestBed } from '@angular/core/testing';
import { Planta } from './planta';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PlantaService } from './planta.service';

describe('Planta', () => {
  let service: PlantaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PlantaService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an instance', () => {
    expect(new Planta(1, "NombreComunPlanta", "NombreCientificoPlanta", "Tipo", 150, "ClimaPlanta","SustratoSiembra")).toBeTruthy();
  });
});
