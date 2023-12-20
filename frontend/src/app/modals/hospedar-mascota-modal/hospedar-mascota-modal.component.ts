import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hospedar-mascota-modal',
  templateUrl: './hospedar-mascota-modal.component.html',
  styleUrls: ['./hospedar-mascota-modal.component.scss']
})
export class HospedarMascotaModalComponent {
  @Input() nombreMascota: string;
  fechaRetorno: Date;
  constructor(public activeModal: NgbActiveModal) {}
}
