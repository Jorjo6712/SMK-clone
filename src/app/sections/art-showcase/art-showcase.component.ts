import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ActivatedRoute, Router } from '@angular/router';
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
  obNumber: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artworkService: ArtworkService,
  ) {}

 async ngOnInit(): Promise<void> {
    this.obNumber = this.route.snapshot.paramMap.get('id')!;
    this.artwork = await this.artworkService.fetchArtworkByObNumber(this.obNumber);
    if (!this.artwork) {
      this.router.navigate(['/404'])
    }
  }}
