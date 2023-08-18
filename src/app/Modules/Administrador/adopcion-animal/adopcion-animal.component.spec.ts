import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionAnimalComponent } from './adopcion-animal.component';

describe('AdopcionAnimalComponent', () => {
  let component: AdopcionAnimalComponent;
  let fixture: ComponentFixture<AdopcionAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopcionAnimalComponent]
    });
    fixture = TestBed.createComponent(AdopcionAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
