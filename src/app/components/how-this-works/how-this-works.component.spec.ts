import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowThisWorksComponent } from './how-this-works.component';

describe('HowThisWorksComponent', () => {
  let component: HowThisWorksComponent;
  let fixture: ComponentFixture<HowThisWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowThisWorksComponent]
    });
    fixture = TestBed.createComponent(HowThisWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
