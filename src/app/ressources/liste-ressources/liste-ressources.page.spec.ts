import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeRessourcesPage } from './liste-ressources.page';

describe('ListeRessourcesPage', () => {
  let component: ListeRessourcesPage;
  let fixture: ComponentFixture<ListeRessourcesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRessourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
