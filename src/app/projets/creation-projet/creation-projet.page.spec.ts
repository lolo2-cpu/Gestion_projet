import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationProjetPage } from './creation-projet.page';

describe('CreationProjetPage', () => {
  let component: CreationProjetPage;
  let fixture: ComponentFixture<CreationProjetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
