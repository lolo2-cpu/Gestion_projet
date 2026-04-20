import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProjetPage } from './detail-projet.page';

describe('DetailProjetPage', () => {
  let component: DetailProjetPage;
  let fixture: ComponentFixture<DetailProjetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
