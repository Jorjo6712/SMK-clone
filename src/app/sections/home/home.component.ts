import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtworkService } from '../art-showcase/artwork.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  artworks: any = null;
  searchQuery: string = '*'; // Default search query

  constructor(private router: Router, private service: ArtworkService) {}

  ngOnInit() {
    this.performSearch(); // Fetch initial artworks with default query
  }

  async performSearch() {
    await this.service.searchArtworks(this.searchQuery);
    this.artworks = this.service.artworks;
  }

  async onSearch() {
    if (this.searchQuery.trim()) {
      await this.performSearch();
    } else {
      this.artworks = []; // Clear results if the search query is empty
    }
  }

  viewArtwork(artId: string) {
    this.router.navigate(['/art/', artId]);
  }
}
