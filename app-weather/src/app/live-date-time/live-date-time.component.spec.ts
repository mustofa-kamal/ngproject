import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDateTimeComponent } from './live-date-time.component';

describe('LiveDateTimeComponent', () => {
  let component: LiveDateTimeComponent;
  let fixture: ComponentFixture<LiveDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveDateTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
