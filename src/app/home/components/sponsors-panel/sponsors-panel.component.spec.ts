import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsPanelComponent } from './sponsors-panel.component';

describe('SponsorsPanelComponent', () => {
  let component: SponsorsPanelComponent;
  let fixture: ComponentFixture<SponsorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
