import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { UserModel } from '../models/user-model';
import { isDevMode } from '@angular/core';

const apiSuffix = '/api/bios/';
const baseApiUrl = `https://bio.torre.co${apiSuffix}`;
const apiUrl = isDevMode() ? apiSuffix : baseApiUrl;
const testUserId = 'torre';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  getUserInfo(userId: string = testUserId) {
    // user id might come from any user list..
    const url = apiUrl + userId;
    return this.http.get<any>(url, { headers: this.getHeader() }).pipe(
      map((user) => {
        // manage error issues
        if (user['errorMessage']) {
          this.handleError(`getUserInfo error, user id: ${testUserId}`);
        }
        console.log(user);
        return user;
      }),
      catchError((err) =>
        this.handleError(`getUserInfo error, user id: ${testUserId} - ${err}`)
      )
    );
  }

  private handleError(errorMessage = 'operation') {
    console.log(errorMessage);
    return of(errorMessage);
  }

  private getHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
    });
  }
}
