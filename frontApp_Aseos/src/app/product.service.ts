import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/Productos`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/Productos/${id}`);
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/Productos`, productData);
  }

  updateProduct(id: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/Productos/${id}`, productData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/Productos/${id}`);
  }
}