import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCreateService {
  private apiUrl = 'http://localhost:5235/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Productos`).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(number: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Productos/${number}`).pipe(  
      map(response => Array.isArray(response) ? response : [response]),  
      catchError(this.handleError)  
    );
  }

  createProduct(json_data: any){
    this.http.post(`${this.apiUrl}/Productos`, json_data).subscribe(  
      response => {  
        console.log('POST request is successful ', response);  
      },  
      error => {  
        console.log('Error', error);  
      }  
    );
  }

  deleteProduct(number: number){
    this.http.delete(`${this.apiUrl}/Productos/${number}`).subscribe(  
      response => {  
        console.log('DELETE request is successful ', response);  
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
