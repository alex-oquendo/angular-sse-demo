import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from '../shared/contants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  SendMessage(data: any) {
    return this.http.post<string>(`http://${Server.HOST}:${Server.PORT}${Server.URI}?id=${data.id}`, { message: data.message });
  }
}
