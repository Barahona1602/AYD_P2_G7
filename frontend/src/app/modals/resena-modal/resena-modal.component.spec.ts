import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaModalComponent } from './resena-modal.component';

describe('ResenaModalComponent', () => {
  let component: ResenaModalComponent;
  let fixture: ComponentFixture<ResenaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenaModalComponent]
    });
    fixture = TestBed.createComponent(ResenaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
