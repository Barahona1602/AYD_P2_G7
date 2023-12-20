import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedarMascotaModalComponent } from './hospedar-mascota-modal.component';

describe('HospedarMascotaModalComponent', () => {
  let component: HospedarMascotaModalComponent;
  let fixture: ComponentFixture<HospedarMascotaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospedarMascotaModalComponent]
    });
    fixture = TestBed.createComponent(HospedarMascotaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
