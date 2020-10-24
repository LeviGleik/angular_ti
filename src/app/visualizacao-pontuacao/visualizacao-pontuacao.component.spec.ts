import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoPontuacaoComponent } from './visualizacao-pontuacao.component';

describe('VisualizacaoPontuacaoComponent', () => {
  let component: VisualizacaoPontuacaoComponent;
  let fixture: ComponentFixture<VisualizacaoPontuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacaoPontuacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
