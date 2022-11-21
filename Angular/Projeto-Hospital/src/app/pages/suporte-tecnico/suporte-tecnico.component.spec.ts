import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuporteTecnicoComponent } from './suporte-tecnico.component';

describe('SuporteTecnicoComponent', () => {
  let component: SuporteTecnicoComponent;
  let fixture: ComponentFixture<SuporteTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuporteTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuporteTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
