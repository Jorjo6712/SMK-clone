import { Component } from '@angular/core';

@Component({
  selector: 'app-art-showcase',
  standalone: true,
  imports: [],
  templateUrl: './art-showcase.component.html',
  styleUrl: './art-showcase.component.css'
})
export class ArtShowcaseComponent {

}

export interface IArt {
  artId: number,
  artDominantColor: string,
}

