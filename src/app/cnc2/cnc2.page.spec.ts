import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CNC2Page } from './cnc2.page';

describe('CNC2Page', () => {
  let component: CNC2Page;
  let fixture: ComponentFixture<CNC2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CNC2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
