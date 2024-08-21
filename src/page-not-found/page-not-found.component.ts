import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [ ImageModule ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
