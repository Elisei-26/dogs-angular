import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownRouteComponent } from './unknown-route.component';

describe('UnknownRouteComponent', () => {
  let component: UnknownRouteComponent;
  let fixture: ComponentFixture<UnknownRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnknownRouteComponent]
    });
    fixture = TestBed.createComponent(UnknownRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
