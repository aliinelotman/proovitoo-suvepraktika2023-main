import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Checkout } from 'src/app/models/checkout';
import { CheckoutService } from 'src/app/services/checkout.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-late-checkouts',
  templateUrl: './late-checkouts.component.html',
  styleUrls: ['./late-checkouts.component.scss']
})
export class LateCheckoutsComponent implements OnInit {

  checkouts$!: Observable<Page<Checkout>>;
  checkouts: any = [];
  p: number = 1; //pagination
  searchInput = "";
  today = "";
  dbCheckOutDate= "";


  constructor(
    private checkoutService: CheckoutService,
  ) {
  }


  ngOnInit(): void {
   this.checkouts$ = this.checkoutService.getCheckouts({pageIndex:0,pageSize:999,sort:'checkedOutDate',direction:'asc'});
  }

  //using https://stackoverflow.com/questions/53996410/compare-two-dates-in-angular-6 and https://danielk.tech/home/angular-how-to-apply-filters-to-ngfor, also got OpenAi's help with solving my error
  checkoutDatePassed(checkout: Checkout):boolean{
    this.today = formatDate(new Date(),'yyyy-MM-dd','en_US');
    this.dbCheckOutDate = formatDate(checkout.dueDate,'yyyy-MM-dd','en_US');
    return this.today<this.dbCheckOutDate;
  }

}


