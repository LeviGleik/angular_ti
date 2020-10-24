import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularTurmaComponent } from './matricular-turma.component';

describe('MatricularTurmaComponent', () => {
  let component: MatricularTurmaComponent;
  let fixture: ComponentFixture<MatricularTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatricularTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricularTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
