import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiUrl = 'http://localhost:5235/api';

  constructor(private http: HttpClient) {}

  getProductsList(){
    return this.http.get<any[]>(`${this.apiUrl}/Productos`).pipe(
      catchError(this.handleError)
    ); //'Lista de Productos'
    //this.http.get<any[]>(`${this.apiUrl}/api/Productos`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El servidor devolvió un código de error
      console.error(`Código de error ${error.status}, ` + `mensaje: ${error.message}`);
    }
    // Devuelve un observable con un mensaje de error
    return throwError('Algo salió mal; inténtalo de nuevo más tarde.');
  }
}
