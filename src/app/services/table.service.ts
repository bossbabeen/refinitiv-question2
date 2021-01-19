import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('https://api.publicapis.org/categories').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
