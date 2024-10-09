import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMultipleImagesForDamagePage } from './add-multiple-images-for-damage.page';

describe('AddMultipleImagesForDamagePage', () => {
  let component: AddMultipleImagesForDamagePage;
  let fixture: ComponentFixture<AddMultipleImagesForDamagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultipleImagesForDamagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
