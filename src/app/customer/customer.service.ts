import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getMenu():Observable< any[]> {
    return this.http.get<any[]>("http://localhost:3000/api/menuitems");
  }
}
