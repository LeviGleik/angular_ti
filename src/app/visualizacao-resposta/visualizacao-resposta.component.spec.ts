import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoRespostaComponent } from './visualizacao-resposta.component';

describe('VisualizacaoRespostaComponent', () => {
  let component: VisualizacaoRespostaComponent;
  let fixture: ComponentFixture<VisualizacaoRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacaoRespostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
