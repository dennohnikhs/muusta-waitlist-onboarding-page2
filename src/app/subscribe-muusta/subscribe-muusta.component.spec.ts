import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeMuustaComponent } from './subscribe-muusta.component';

describe('SubscribeMuustaComponent', () => {
  let component: SubscribeMuustaComponent;
  let fixture: ComponentFixture<SubscribeMuustaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeMuustaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribeMuustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
