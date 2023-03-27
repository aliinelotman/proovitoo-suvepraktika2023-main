import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Checkout } from 'src/app/models/checkout';

@Component({
  selector: 'app-mycheckout',
  templateUrl: './mycheckout.component.html',
  styleUrls: ['./mycheckout.component.scss']
})
export class MycheckoutComponent implements OnInit {
  checkout$!: Observable<Checkout>;
  checkout: any = [];


  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService
  ) {
  }

    // Implement individual checkout view and CRUD
  ngOnInit(): void {
    this.checkout$ = this.route.params
    .pipe(map(params => params['id']))
    .pipe(switchMap(id => this.checkoutService.getCheckout(id)))

  }

  save(checkout: Checkout){
    let body = {
      id: this.checkout.checkOutId,
      borrowerFirstName: this.checkout.borrowerFirstName,
      borrowerLastName: this.checkout.borrowerLastName,
      borrowedBook: this.checkout.borrowedBook,
      checkedOutDate: this.checkout.checkedOutDate,
      dueDate: this.checkout.dueDate,
      returnedDate: this.checkout.returnedDate
    }
    this.checkoutService.saveCheckout(body)
      .subscribe(res => {
        console.log(res)
      })
}

  remove(checkout: Checkout){
    let id = checkout.id;
    this.checkoutService.deleteCheckout(id)
      .subscribe(res => {
        console.log("DELETED")
      })
  }

  
}
