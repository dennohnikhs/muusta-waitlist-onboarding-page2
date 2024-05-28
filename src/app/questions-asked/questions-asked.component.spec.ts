import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAskedComponent } from './questions-asked.component';

describe('QuestionsAskedComponent', () => {
  let component: QuestionsAskedComponent;
  let fixture: ComponentFixture<QuestionsAskedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsAskedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsAskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
