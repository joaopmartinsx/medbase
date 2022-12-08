import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPacienteComponent } from './consulta-paciente.component';

describe('ConsultaPacienteComponent', () => {
  let component: ConsultaPacienteComponent;
  let fixture: ComponentFixture<ConsultaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
