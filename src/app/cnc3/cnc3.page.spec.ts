import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CNC3Page } from './cnc3.page';

describe('CNC3Page', () => {
  let component: CNC3Page;
  let fixture: ComponentFixture<CNC3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CNC3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
