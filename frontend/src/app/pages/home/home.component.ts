import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }

  irAMascotas(): void {
    this.router.navigate(["mascotas"]);
  }

  irAHospedajes(): void {
    this.router.navigate(["hospedaje"]);
  }

  irAPerfil(): void {
    this.router.navigate(["perfil"]);
  }
}
