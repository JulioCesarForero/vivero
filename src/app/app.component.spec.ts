import { ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantaService } from './planta/planta.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaPlantaComponent } from './planta/lista-planta/lista-planta.component';

describe('AppComponent', () => {
  let component: ListaPlantaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, ListaPlantaComponent ],
      providers: [PlantaService, HttpClient, HttpHandler]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vivero'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vivero');
  });


});
