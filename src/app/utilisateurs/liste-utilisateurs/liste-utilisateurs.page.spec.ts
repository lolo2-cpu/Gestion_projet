import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeUtilisateursPage } from './liste-utilisateurs.page';

describe('ListeUtilisateursPage', () => {
  let component: ListeUtilisateursPage;
  let fixture: ComponentFixture<ListeUtilisateursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUtilisateursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
