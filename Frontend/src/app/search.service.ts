import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  public search(searchTerm: string) {
    return this._http.get(`http://localhost:3000/api/search/${searchTerm}`);
  }
}
