import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page, PageRequest } from '../models/page';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestUtil } from './rest-util';
import { Checkout } from '../models/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private readonly baseUrl = environment.backendUrl + '/api/checkout';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCheckouts(filter: Partial<PageRequest>): Observable<Page<Checkout>> {
    const url = this.baseUrl + '/getCheckouts';
    const params = RestUtil.buildParamsFromPageRequest(filter);
    return this.http.get<Page<Checkout>>(url, {params});
  }

  getCheckout(checkoutId: string): Observable<Checkout> {
    const url = this.baseUrl + '/geCheckout';
    const params = new HttpParams().set('checkoutId', checkoutId);
    return this.http.get<Checkout>(url, {params});
  }

  saveCheckout(checkout: Checkout): Observable<void> {
    const url = this.baseUrl + '/checkout';
    return this.http.post<void>(url, checkout);
  }

  deleteCheckout(checkoutId: string): Observable<void> {
    const url = this.baseUrl + '/checkout';
    const params = new HttpParams().set('checkoutId', checkoutId);
    return this.http.delete<void>(url, {params});
  }

}
