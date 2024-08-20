import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  private baseUrl = `https://api.smk.dk/api/v1/art/search/?keys=*&facetNum=-1&facets=creator,artist,colors,role_attributed_to,role_earlier_ascribed_to,role_workshop_of,role_follower,role_after,role_school,role_imitator_of,role_copy_after,role_after_model_by,role_publisher,role_printer,role_artist,creator_nationality,creator_gender,content_person,content_subject,object_names,techniques,materials,medium&lang=da&rows=100`;

  private offset = 0;
  artworks: any[] = [];

  constructor() {
    this.fetchArtworks();
  }

  public async fetchArtworks() {
    try {
      const apiUrl = `${this.baseUrl}&offset=${this.offset}`;
      const response = await axios.get(apiUrl);
      const items = response.data?.items || [];

      // Append new items to the existing artworks
      this.artworks = [
        ...this.artworks,
        ...items.map((item: any) => ({
          id: item.id,
          title: item.titles[0]?.title || 'Unknown Title',
          imageUrl: item.image_thumbnail || 'images/placeholder.png',
          artist: item.artist[0] || 'Unknown Artist',
          year: item.production_date[0]?.period || 'Unknown Period',
          obNumber: item.object_number || 'Unknown Object Number',
        })),
      ];
      console.log('Data fetched successfully!', this.artworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  }

  // Method to update offset and fetch more artworks
  public async loadMoreArtworks() {
    this.offset += 100; // Increment offset by the number of rows fetched
    await this.fetchArtworks(); // Fetch the next set of artworks
  }
}
