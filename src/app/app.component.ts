import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
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
    RouterLink,
    RouterLinkActive,
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

  languages = [
    { name: 'EN', code: 'EN' },
    { name: 'DA', code: 'DA' },
  ];

  selectedLang: any;

  constructor( private router: Router ) {}

  ngOnInit() {
    const storedLang = localStorage.getItem('selectedLang');

    if (storedLang) {
      this.selectedLang = JSON.parse(storedLang);
    } else {
      this.selectedLang = { name: 'DA', code: 'DA' };
    }

  }
  onLanguageChange(event: any) {
    this.selectedLang = event.value;
    localStorage.setItem('selectedLang', JSON.stringify(this.selectedLang));
    location.reload() /* FIX: Stupid fucking code that refreshes whole page just to properly refetch,
                               fix if possible
                      */
  }



}
