import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../model/character';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiRepoService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://rickandmortyapi.com/api/character';
  }
  getAll(): Observable<ApiResponse> {
    const response = this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((data) => {
        return data;
      }),
    );
    if (!response) throw new Error('Error in the load.');
    return response;
  }

  getMoreCharacters(newApiUrl: string): Observable<ApiResponse> {
    const response = this.http.get<ApiResponse>(newApiUrl).pipe(
      map((data) => {
        return data;
      }),
    );
    if (!response) throw new Error('Error in the new load.');
    return response;
  }
}
