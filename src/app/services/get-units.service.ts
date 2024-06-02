import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUnitsResponse } from '../interfaces/get-units-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private readonly api =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private httpClient: HttpClient) {}

  getAllUnits(): Observable<GetUnitsResponse> {
    return this.httpClient.get<GetUnitsResponse>(this.api);
  }
}
