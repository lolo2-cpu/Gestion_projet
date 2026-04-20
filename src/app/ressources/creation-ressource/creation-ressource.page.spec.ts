import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationRessourcePage } from './creation-ressource.page';

describe('CreationRessourcePage', () => {
  let component: CreationRessourcePage;
  let fixture: ComponentFixture<CreationRessourcePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationRessourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
