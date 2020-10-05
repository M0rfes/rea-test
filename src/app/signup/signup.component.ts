import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  private _name = 'jon dore';
  private _email = 'jon@doe';
  constructor(
    private readonly fb: FormBuilder,
    private readonly signupService: SignupService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [{ value: this._name, disabled: true }, [Validators.required]],
      email: [
        { value: this._email, disabled: true },
        [Validators.required, Validators.email],
      ],
      password: [, [Validators.required]],
    });
  }
  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  doSignUp() {
    const payload = {
      ...this.signUpForm.value,
      email: this._email,
      name: this._name,
    };
    this.signupService
      .mockHttpReq(payload)
      .subscribe(() => this.router.navigate(['/thank-you']));
  }
}
