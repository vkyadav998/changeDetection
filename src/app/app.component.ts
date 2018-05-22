import { Component,DoCheck,KeyValueChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

export class Customer {
  firstName: string;
  favoriteColor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {
  private customerDiffer: KeyValueDiffer<string, any>;
  private customer: Customer;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit(): void {
    this.customer = new Customer();
    this.customerDiffer = this.differs.find(this.customer).create();
  }

  customerChanged(changes: KeyValueChanges<string, any>) {
    console.log('changes');
  }

  ngDoCheck(): void {
      const changes = this.customerDiffer.diff(this.customer);
      if (changes) {
        this.customerChanged(changes);
      }
  }

}
