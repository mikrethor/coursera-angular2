import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import { ConstantsService } from './constants-service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class MenuSearchService {
  menuItems: Array<MenuItem> = [];
  // Resolve HTTP using the constructor
  constructor(private http: Http, private jsonp: Jsonp, private constantService: ConstantsService) {
  }

  getMatchedMenuItems(searchTerm: string): Observable<Array> {

    return this.http.get(this.constantService.API_ENDPOINT + "/menu_items.json")
      .flatMap((response) => response.json()['menu_items'])
      .filter((menu_item) => menu_item.description.toLowerCase().indexOf(searchTerm) !== -1)
  }
}
export class MenuItem {
  constructor(
    public id: number,
    public short_name: string,
    public name: string,
    public description: string,
    public price_small: string,
    public price_large: string,
    public small_portion_name: string,
    public large_portion_name: string
  ) { }
}