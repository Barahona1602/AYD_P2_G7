import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstadoModalComponent } from './actualizar-estado-modal.component';

describe('ActualizarEstadoModalComponent', () => {
  let component: ActualizarEstadoModalComponent;
  let fixture: ComponentFixture<ActualizarEstadoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarEstadoModalComponent]
    });
    fixture = TestBed.createComponent(ActualizarEstadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
