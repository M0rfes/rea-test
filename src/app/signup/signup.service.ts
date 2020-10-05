import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}
  mockHttpReq(payload: { name: string; email: string; password: string }) {
    return of(payload);
  }
}
