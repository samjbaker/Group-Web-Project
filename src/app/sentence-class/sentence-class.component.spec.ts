import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceClassComponent } from './sentence-class.component';

describe('SentenceClassComponent', () => {
  let component: SentenceClassComponent;
  let fixture: ComponentFixture<SentenceClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
