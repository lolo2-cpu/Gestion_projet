import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeTachesPage } from './liste-taches.page';

describe('ListeTachesPage', () => {
  let component: ListeTachesPage;
  let fixture: ComponentFixture<ListeTachesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTachesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
