import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
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

  ngOnInit() {
    const storedLang = localStorage.getItem('selectedLang');

    if (storedLang) {
      this.selectedLang = JSON.parse(storedLang);
    } else {
      this.selectedLang = { name: 'Danish', code: 'DA' };
    }
  }
  onLanguageChange(event: any) {
    this.selectedLang = event.value;
    localStorage.setItem('selectedLang', JSON.stringify(this.selectedLang));
  }

}
