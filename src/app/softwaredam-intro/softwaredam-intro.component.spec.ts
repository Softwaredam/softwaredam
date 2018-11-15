import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredamIntroComponent } from './softwaredam-intro.component';

describe('SoftwaredamIntroComponent', () => {
  let component: SoftwaredamIntroComponent;
  let fixture: ComponentFixture<SoftwaredamIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwaredamIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaredamIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
