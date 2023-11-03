import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRUEBASPage } from './pruebas.page';

describe('PRUEBASPage', () => {
  let component: PRUEBASPage;
  let fixture: ComponentFixture<PRUEBASPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PRUEBASPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
