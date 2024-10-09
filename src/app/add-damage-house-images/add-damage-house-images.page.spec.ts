import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDamageHouseImagesPage } from './add-damage-house-images.page';

describe('AddDamageHouseImagesPage', () => {
  let component: AddDamageHouseImagesPage;
  let fixture: ComponentFixture<AddDamageHouseImagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDamageHouseImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
