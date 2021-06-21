import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}
  getdata(){
    return this.http.get('https://krds-assignment.github.io/aoc/api-assets/data.json');
  }
}
