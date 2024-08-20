import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtworkService } from '../art-showcase/artwork.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  artworks: any[] = [];

  constructor(private router: Router, private service: ArtworkService) {}

  ngOnInit() {
    // Wait for artworks to be fetched
    this.service
      .fetchArtworks()
      .then(() => {
        this.artworks = this.service.artworks;
      })
      .catch((error) => {
        console.error('Error loading artworks in component:', error);
      });
  }

  viewArtwork(artId: number) {
    console.log('FUCK BITCH BITCH FUCK', artId);
    this.router.navigate(['/art', artId]); // Navigates to /art/:id
  }
}
