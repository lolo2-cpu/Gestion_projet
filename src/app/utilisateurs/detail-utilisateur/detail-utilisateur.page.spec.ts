import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailUtilisateurPage } from './detail-utilisateur.page';

describe('DetailUtilisateurPage', () => {
  let component: DetailUtilisateurPage;
  let fixture: ComponentFixture<DetailUtilisateurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
