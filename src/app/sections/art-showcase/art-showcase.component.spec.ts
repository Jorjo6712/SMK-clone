import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtShowcaseComponent } from './art-showcase.component';

describe('ArtShowcaseComponent', () => {
  let component: ArtShowcaseComponent;
  let fixture: ComponentFixture<ArtShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
