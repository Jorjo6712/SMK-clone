import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {

  private selectedLang = JSON.parse(localStorage.getItem('selectedLang') ?? '"DA"');

  private baseUrl = `https://api.smk.dk/api/v1/art/`;
  private offset = 0;
  artworks: any[] = [];

  constructor() {}

  // Fetch artworks with the given query and offset
  public async fetchArtworks(query: string = '*'): Promise<void> {
    try {
      const response = await axios.get(this.baseUrl + "search/", {
        params: {
          keys: query,
          facetNum: '-1',
          facets:
            'creator,artist,colors,role_attributed_to,role_earlier_ascribed_to,role_workshop_of,role_follower,role_after,role_school,role_imitator_of,role_copy_after,role_after_model_by,role_publisher,role_printer,role_artist,creator_nationality,creator_gender,content_person,content_subject,object_names,techniques,materials,medium',
          lang: String(this.selectedLang.name.toLowerCase()),
          rows: '24',
          offset: this.offset,
        },
      });

      const items = response.data?.items || [];

      // Replace existing artworks with new results or append them if loading more
      if (this.offset === 0) {
        this.artworks = items.map((item: any) => ({
          id: item.id,
          title: item.titles[0]?.title || 'Unknown Title',
          imageUrl: item.image_thumbnail || 'images/placeholder.png',
          artist: item.artist[0] || 'Unknown Artist',
          year: item.production_date[0]?.period || 'Unknown Period',
          obNumber: item.object_number || 'Unknown Object Number',
        }));
      } else {
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
      }

      console.log('Data fetched successfully!');
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  }

  public async fetchArtworkByObNumber(obNumber: string): Promise<any> {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          object_number: obNumber,
          lang: String(this.selectedLang.name.toLowerCase()),
        },
      });

      const items = response.data?.items || [];
      if (items.length > 0) {
        return {
          id: items[0].id,
          title: items[0].titles[0]?.title || 'Unknown Title',
          imageUrl: items[0].image_thumbnail || 'images/placeholder.png',
          artist: items[0].artist[0] || 'Unknown Artist',
          year: items[0].production_date[0]?.period || 'Unknown Period',
          obNumber: items[0].object_number || 'Unknown Object Number',
        };
      }
      return null; // Return null if no artwork is found
    } catch (error) {
      console.error('Error fetching artwork:', error);
      return null;
    }
  }

  // Get artwork by its object number (obNumber)
  getArtworkById(id: string) {
    return this.artworks.find((art) => art.obNumber === id);
  }

  // Perform a search for artworks based on a query
  public async searchArtworks(query: string): Promise<void> {
    this.offset = 0; // Reset offset for new search
    await this.fetchArtworks(query); // Fetch artworks based on the query
  }

  // Load more artworks for pagination
  public async loadMoreArtworks(): Promise<void> {
    this.offset += 24; // Increment offset
    await this.fetchArtworks(); // Fetch more artworks
  }
}
