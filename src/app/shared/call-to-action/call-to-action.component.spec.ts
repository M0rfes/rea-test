import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';

import { CallToActionComponent } from './call-to-action.component';

describe('CallToActionComponent', () => {
  let component: CallToActionComponent;
  let fixture: ComponentFixture<CallToActionComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallToActionComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title equal to Title', () => {
    component.title = 'Title';
    fixture.detectChanges();
    const h2 = el.query(By.css('h2'));

    expect(h2).toBeTruthy('cant find h2');
    expect(h2.nativeElement.innerHTML).toEqual('Title');
  });

  it('should have sub title equal to sub Title', () => {
    component.subTitle = 'sub Title';
    fixture.detectChanges();
    const pre = el.query(By.css('pre'));
    expect(pre).toBeTruthy('cant find pre tag');
    expect(pre.nativeElement.innerHTML).toEqual('sub Title');
  });

  it('should not render pre tag', () => {
    const pre = el.query(By.css('pre'));
    expect(pre).toBeFalsy('fount a pre tag');
  });
});
