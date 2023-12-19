import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  
  loading: boolean = false;
  mascota: any;

  constructor(
    private pagesService: PagesService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.getMascota();
  }


  getMascota() {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.pagesService.getMascota(params["id"]).subscribe(resp => {
        console.log(resp);
        this.mascota = resp.mascota;
        this.loading = false;
      }, err => {
        console.log(err);
      })
    })
  }

  atras(): void {
    this.location.back();
  }
}
