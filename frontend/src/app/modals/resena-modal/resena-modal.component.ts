import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resena-modal',
  templateUrl: './resena-modal.component.html',
  styleUrls: ['./resena-modal.component.scss']
})
export class ResenaModalComponent implements OnInit {
  
  resena: string = "";
  calificacion: number = 0;

  constructor(public activeModal: NgbActiveModal) {
    
  }

  get notValidModal(): boolean {
    return this.resena.length === 0 && (1 > this.calificacion || 5 < this.calificacion); 
  }
  
  get result(): any {
    return { resena: this.resena, calificacion: this.calificacion };
  }
  
  ngOnInit(): void {
    
  }
}
