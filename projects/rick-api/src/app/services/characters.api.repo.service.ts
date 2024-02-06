import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse, Character } from '../model/character';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiRepoService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://rickandmortyapi.com/api/character';
  }
  getAll(): Observable<Character[]> {
    const response = this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((data) => {
        return data.results;
      }),
    );
    if (!response) throw new Error('Error in the load.');
    return response;
  }

  getMoreCharacters(nextPage: number): Observable<Character[]> {
    const nextUrlPage = this.apiUrl + '?page=' + nextPage;
    const response = this.http.get<ApiResponse>(nextUrlPage).pipe(
      map((data) => {
        return data.results;
      }),
    );
    if (!response) throw new Error('Error in the new load.');
    return response;
  }

  getFilteredCharacters(key: string, value: string, page: number) {
    const filteredUrl = this.apiUrl + `/?page=${page}&${key}=${value}`;
    console.log(filteredUrl);
    const response = this.http.get<ApiResponse>(filteredUrl).pipe(
      map((data) => {
        return data;
      }),
    );
    if (!response) throw new Error('Error in the filter.');
    return response;
  }
}
