import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationTachePage } from './creation-tache.page';

describe('CreationTachePage', () => {
  let component: CreationTachePage;
  let fixture: ComponentFixture<CreationTachePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
