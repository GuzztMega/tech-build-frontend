import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Equipment } from './equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  url = 'http://localhost:3000/equipment';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getEquipments(): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(this.url)
      .pipe(retry(2), catchError(this.handleError))
  }

  getEquipmentById(id: number): Observable<Equipment> {
    return this.httpClient.get<Equipment>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError))
  }

  addEquipment(equipment: Equipment): Observable<Equipment> {
    return this.httpClient.post<Equipment>(this.url, JSON.stringify(equipment), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
  }

  updateEquipment(equipment: Equipment): Observable<Equipment> {
    return this.httpClient.put<Equipment>(this.url + '/' + equipment._id, JSON.stringify(equipment), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
  }

  deleteEquipment(equipment: Equipment) {
    return this.httpClient.delete<Equipment>(this.url + '/' + equipment._id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    console.log('caiu no erro');
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error message: ${error.status}, ` + ` message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
