import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingbarComponent } from './trendingbar.component';

describe('TrendingbarComponent', () => {
  let component: TrendingbarComponent;
  let fixture: ComponentFixture<TrendingbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
