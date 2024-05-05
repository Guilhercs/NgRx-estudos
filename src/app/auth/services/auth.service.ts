import { CurrentUserInterface } from './../../shared/currentUser.interface';
import { RegisterRequestInterface } from './../types/registerRequest.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #http = inject(HttpClient);

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this.#http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}
