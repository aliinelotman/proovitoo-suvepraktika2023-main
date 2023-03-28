import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Checkout } from 'src/app/models/checkout';
import { CheckoutService } from 'src/app/services/checkout.service';



@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  checkouts$!: Observable<Page<Checkout>>;
  checkouts: any = [];
  p: number = 1; //pagination

  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  ngOnInit(): void {
     // Implementing table of checkouts view using backend api endpoint /getCheckouts, support for paging and sorting
    this.checkouts$ = this.checkoutService.getCheckouts({pageIndex:0,pageSize:999,sort:'checkedOutDate',direction:'desc'});

  }




}
