import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPacienteComponent } from './video-paciente.component';

describe('VideoPacienteComponent', () => {
  let component: VideoPacienteComponent;
  let fixture: ComponentFixture<VideoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
