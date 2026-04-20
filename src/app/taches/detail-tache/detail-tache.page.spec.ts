import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTachePage } from './detail-tache.page';

describe('DetailTachePage', () => {
  let component: DetailTachePage;
  let fixture: ComponentFixture<DetailTachePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
