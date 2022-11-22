import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPanelComponent } from './featured-panel.component';

describe('FeaturedPanelComponent', () => {
  let component: FeaturedPanelComponent;
  let fixture: ComponentFixture<FeaturedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
