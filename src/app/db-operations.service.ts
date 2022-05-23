import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormEntry } from './models/form-entry';


@Injectable({
  providedIn: 'root'
})
export class DbOperationsService {

  constructor(private http: HttpClient) { }

  addSku(newSkuData: string) {
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post('http://localhost:3000/skus', newSkuData)

  }
  getSku(): Observable<any> {
    return this.http.get<FormEntry[]>('http://localhost:3000/skus');
  }
  viewSku(id: number): Observable<any> {
    return this.http.get<FormEntry[]>('http://localhost:3000/skus' + id);
  }

}
