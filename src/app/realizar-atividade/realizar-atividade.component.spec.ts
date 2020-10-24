import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarAtividadeComponent } from './realizar-atividade.component';

describe('RealizarAtividadeComponent', () => {
  let component: RealizarAtividadeComponent;
  let fixture: ComponentFixture<RealizarAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
