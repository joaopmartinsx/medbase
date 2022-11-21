import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMedicoComponent } from './pagina-medico.component';

describe('PaginaMedicoComponent', () => {
  let component: PaginaMedicoComponent;
  let fixture: ComponentFixture<PaginaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
