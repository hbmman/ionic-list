import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  company_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public person: Person[] = [];
  private localMockData = '../assets/MOCK_DATA.json';

  constructor(private http: HttpClient) { }

  fetchPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.localMockData)
        .pipe(tap(person => this.person = person));
  }
}
