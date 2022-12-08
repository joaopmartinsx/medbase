import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitarPacientesComponent } from './receitar-pacientes.component';

describe('ReceitarPacientesComponent', () => {
  let component: ReceitarPacientesComponent;
  let fixture: ComponentFixture<ReceitarPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitarPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
