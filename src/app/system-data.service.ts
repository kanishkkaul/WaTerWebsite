import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemDataService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getSystemData() {
    return this.http.get(`${this.uri}/test`);
  }

  getSystemDataById(id) {
    return this.http.get(`${this.uri}/test/${id}`);
  }

}
