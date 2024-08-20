import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtworkService } from '../art-showcase/artwork.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  artworks: any[] = [];

  constructor(private router: Router, private service: ArtworkService) {}

  ngOnInit() {
    // Load initial artworks
    this.service
      .fetchArtworks()
      .then(() => {
        this.artworks = this.service.artworks;
      })
      .catch((error) => {
        console.error('Error loading artworks in component:', error);
      });
  }

  loadMore() {
    this.service
      .loadMoreArtworks()
      .then(() => {
        this.artworks = this.service.artworks;
      })
      .catch((error) => {
        console.error('Error loading more artworks:', error);
      });
  }

  viewArtwork(obNumber: string) {
    this.router.navigate(['/art-showcase', obNumber]);
  }
}
