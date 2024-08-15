import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  artworks = [
    { id: 1, title: 'artwork1', imageUrl: 'https://iip-thumb.smk.dk/iiif/jp2/fj2365317_KMS1621.tif.reconstructed.tif.jp2/full/!2048,/0/default.jpg' },
    { id: 2, title: 'artwork2', imageUrl: 'https://api.smk.dk/api/v1/thumbnail/30754fcc-fc56-49f2-92f8-20133486ebea.jpg' },
  ];

  // Method to get an artwork by its ID
  getArtworkById(id: number) {
    return this.artworks.find(art => art.id === id);
  }
}

