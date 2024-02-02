import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse, Character } from '../model/character';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiRepoService implements Repo<Character> {
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
    console.log(response);
    return response;
  }
}
