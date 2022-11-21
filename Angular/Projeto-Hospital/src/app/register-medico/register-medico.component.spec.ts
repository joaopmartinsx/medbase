import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedicoComponent } from './register-medico.component';

describe('RegisterMedicoComponent', () => {
  let component: RegisterMedicoComponent;
  let fixture: ComponentFixture<RegisterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
