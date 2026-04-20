import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeProjetsPage } from './liste-projets.page';

describe('ListeProjetsPage', () => {
  let component: ListeProjetsPage;
  let fixture: ComponentFixture<ListeProjetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProjetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
