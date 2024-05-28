import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionMoreComponent } from './hero-section-more.component';

describe('HeroSectionMoreComponent', () => {
  let component: HeroSectionMoreComponent;
  let fixture: ComponentFixture<HeroSectionMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSectionMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
