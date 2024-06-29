import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private backend_url = 'http://localhost:5235/api'

  //private data_table = new BehaviorSubject<any[]>([]);
  //current_data_table = this.data_table.asObservable();

  constructor(private http: HttpClient) {}

  // Get list of products from SQL Server DB
  get_products()
  {
    return this.http.get<any[]>(`${this.backend_url}/Productos`).pipe(
      catchError(this.handleError)
    );//.subscribe(data_table => {
      //this.data_table.next(data_table);
    //});
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