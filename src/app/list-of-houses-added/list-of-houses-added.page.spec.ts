import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfHousesAddedPage } from './list-of-houses-added.page';

describe('ListOfHousesAddedPage', () => {
  let component: ListOfHousesAddedPage;
  let fixture: ComponentFixture<ListOfHousesAddedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfHousesAddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
