import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actualizar-estado-modal',
  templateUrl: './actualizar-estado-modal.component.html',
  styleUrls: ['./actualizar-estado-modal.component.scss']
})
export class ActualizarEstadoModalComponent implements OnInit {
  
  estado: string = null;
  @Input() nombreMascota: string;

  estados: string[] = ['Comiendo', 'Paseando', 'Bañado', 'Tomando la siesta', 'Jugando', 'Devuelto'];

  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
    
  }
}
