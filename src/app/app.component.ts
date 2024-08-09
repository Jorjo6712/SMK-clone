import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    RouterOutlet,
    ImageModule,
    DropdownModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'SMK-Clone';

  languages: Lang[] | undefined;

    selectedLang: Lang | undefined;

    ngOnInit() {
        this.languages = [
            { name: 'Danish', code: 'Da' },
            { name: 'English', code: 'En' }
        ];
    }
}

interface Lang {
    name: string;
    code: string;
}
