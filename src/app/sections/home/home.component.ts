import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtworkService } from '../art-showcase/artwork.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  artworks : object = []

  constructor(private router: Router, private service: ArtworkService) {
     this.artworks = this.service.artworks
  }


  viewArtwork(artId: number) {
    this.router.navigate(['/art', artId]); // Navigates to /art/:id
  }
}
