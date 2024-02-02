import { Observable } from 'rxjs';

export interface Repo<C extends { id: string }> {
  getAll(): Observable<C[]>;
}
