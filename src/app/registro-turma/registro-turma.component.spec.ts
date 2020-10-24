import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTurmaComponent } from './registro-turma.component';

describe('RegistroTurmaComponent', () => {
  let component: RegistroTurmaComponent;
  let fixture: ComponentFixture<RegistroTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
