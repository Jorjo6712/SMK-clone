import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from './artwork.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art-showcase',
  standalone: true,

  imports: [
    ImageModule,
    CommonModule,
  ],

  templateUrl: './art-showcase.component.html',
  styleUrls: ['./art-showcase.component.css'],
})
export class ArtShowcaseComponent implements OnInit {
  artwork: any = null;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService,
  ) {}

  ngOnInit(): void {
    const artId = String(this.route.snapshot.paramMap.get('id'));
    this.artwork = this.artworkService.getArtworkById(artId);
  }
}
