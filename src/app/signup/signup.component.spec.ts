import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have one disabled email input', () => {
    const inputs = el.queryAll(By.css('input[disabled][type="email"]'));
    expect(inputs.length).toEqual(1);
  });
  it('should have one disabled text input', () => {
    const inputs = el.queryAll(By.css('input[disabled][type="text"]'));
    expect(inputs.length).toEqual(1);
  });
  it('should have one password input', () => {
    const inputs = el.queryAll(By.css('input[type="password"]'));
    expect(inputs.length).toEqual(1);
  });
  it('should have one button with class action', () => {
    const button = el.queryAll(By.css('button.action'));
    expect(button.length).toEqual(1);
  });
  it('should have one disabled action button if no password', () => {
    const button = el.queryAll(By.css('button.action[disabled]'));
    expect(button.length).toEqual(1);
  });
  it('should have one active action button if there is password', () => {
    component.signUpForm.patchValue({ password: '1234' });
    fixture.detectChanges();
    const button = el.query(By.css('button.action'));
    expect(button.nativeElement.disabled).toBeFalse();
  });
});
