import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Checkout } from 'src/app/models/checkout';
import { CheckoutService } from 'src/app/services/checkout.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  checkouts$!: Observable<Page<Checkout>>;
  checkouts: any = [];
  sortingDirection: 'asc' | 'desc' | '' = "";
  p: number = 1; //pagination 

  constructor(
    private checkoutService: CheckoutService,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.checkouts$ = this.checkoutService.getCheckouts({});

  }

  private getCheckouts() {
    this.http.get<any>("http://localhost:8080/checkouts").subscribe(res =>
    this.checkouts = res);

  }

  sort(key: string){
    const newSortingDirection = this.sortingDirection === ""
     ?"asc"
     : this.sortingDirection === "asc"
       ?"desc"
       : "";
     this.sortingDirection = newSortingDirection;
     this.checkouts$=this.checkoutService.getCheckouts({
       direction:newSortingDirection,
       sort:key
     })
   }

}
