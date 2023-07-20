import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedComponentComponent } from './breed-component.component';

describe('BreedComponentComponent', () => {
  let component: BreedComponentComponent;
  let fixture: ComponentFixture<BreedComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedComponentComponent]
    });
    fixture = TestBed.createComponent(BreedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
