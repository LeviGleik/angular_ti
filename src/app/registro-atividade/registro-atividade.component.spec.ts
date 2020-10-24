import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAtividadeComponent } from './registro-atividade.component';

describe('RegistroAtividadeComponent', () => {
  let component: RegistroAtividadeComponent;
  let fixture: ComponentFixture<RegistroAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
