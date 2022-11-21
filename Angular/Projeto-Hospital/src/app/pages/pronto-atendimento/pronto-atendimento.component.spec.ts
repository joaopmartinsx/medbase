import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntoAtendimentoComponent } from './pronto-atendimento.component';

describe('ProntoAtendimentoComponent', () => {
  let component: ProntoAtendimentoComponent;
  let fixture: ComponentFixture<ProntoAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntoAtendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
