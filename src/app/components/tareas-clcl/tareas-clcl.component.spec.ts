import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasClclComponent } from './tareas-clcl.component';

describe('TareasClclComponent', () => {
  let component: TareasClclComponent;
  let fixture: ComponentFixture<TareasClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
