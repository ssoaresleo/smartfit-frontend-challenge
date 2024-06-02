import { Location } from './location.interface';

export interface GetUnitsResponse {
  current_country_id: number;
  locations: Location[];
}
