import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductEditService {
  private apiUrl = 'http://localhost:5235/api';

  constructor(private http: HttpClient) {}

  getProduct(number: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Productos/${number}`).pipe(  
      map(response => Array.isArray(response) ? response : [response]),  
      catchError(this.handleError)  
    );
  }

  updateProduct(number: number, json_data: any){
    this.http.put(`${this.apiUrl}/Productos/${number}`, json_data).subscribe(  
      response => {  
        console.log('PUT request is successful ', response);  
      },  
      error => {  
        console.log('Error', error);  
      }  
    );
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