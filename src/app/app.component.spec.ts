import { ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantaService } from './planta/planta.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { ListaPlantaComponent } from './planta/lista-planta/lista-planta.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>; // Cambiado el tipo de ComponentFixture
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ListaPlantaComponent],
      providers: [PlantaService, HttpClient, HttpHandler],
    }).compileComponents();
  });

   it('should create the app', () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app).toBeTruthy();
   });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
  });

  it('should have 1 tituloMain element', () => {
    const tituloMain = debug.queryAll(By.css('.tituloMain'));
    expect(tituloMain.length).toBe(1); // 1 elementos con esa clase
  });

   it('should have 1 footer-container element', () => {
     const FooterCount = debug.queryAll(By.css('.footer-container'));
     expect(FooterCount.length).toBe(1); // 1 elementos con esa clase
   });

   it('should have 1 header-app-vivero element', () => {
    const HeaderImgCount = debug.queryAll(By.css('.header-app-vivero'));
    expect(HeaderImgCount.length).toBe(1); // 1 elementos con esa clase
  });

});
