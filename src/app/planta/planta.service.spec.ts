/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantaService } from './planta.service';

describe('Service: Planta', () => {
  let service: PlantaService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService,HttpClient, HttpHandler]
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

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
