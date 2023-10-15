import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Point } from './point.model';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  url = 'http://localhost:3000/point';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPoints(): Observable<Point[]> {
    return this.httpClient.get<Point[]>(this.url)
      .pipe(retry(2), catchError(this.handleError))
  }

  getPointById(id: number): Observable<Point> {
    return this.httpClient.get<Point>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  savePoint(point: Point): Observable<Point> {
    return this.httpClient.post<Point>(this.url, JSON.stringify(point), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  updatePoint(point: Point): Observable<Point> {
    return this.httpClient.put<Point>(this.url + '/' + point.id, JSON.stringify(point), this.httpOptions)
      .pipe(retry(1),catchError(this.handleError))
  }

  deletePoint(point: Point) {
    return this.httpClient.delete<Point>(this.url + '/' + point.id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
