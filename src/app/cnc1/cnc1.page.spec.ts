import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CNC1Page } from './cnc1.page';

describe('CNC1Page', () => {
  let component: CNC1Page;
  let fixture: ComponentFixture<CNC1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CNC1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
