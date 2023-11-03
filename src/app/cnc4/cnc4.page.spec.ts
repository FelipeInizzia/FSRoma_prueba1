import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CNC4Page } from './cnc4.page';

describe('CNC4Page', () => {
  let component: CNC4Page;
  let fixture: ComponentFixture<CNC4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CNC4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
