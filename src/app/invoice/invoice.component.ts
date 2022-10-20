import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  id!: number;
  list: Invoice[] = [
    {
      idFacture: 1,
      montantFacture: 120,
      montantRemise: 10,
      dateFacture: '12/12/2021',
      active: true,
    },
    {
      idFacture: 2,
      montantFacture: 1020,
      montantRemise: 90,
      dateFacture: '22/11/2020',
      active: true,
    },
    {
      idFacture: 3,
      montantFacture: 260,
      montantRemise: 30,
      dateFacture: '18/10/2020',
      active: false,
    },
    {
      idFacture: 4,
      montantFacture: 450,
      montantRemise: 40,
      dateFacture: '14/12/2020',
      active: true,
    },
  ];
  subscribeRouteChange() {
    this.ac.params.subscribe((params = {}) => {
      // Will log any change to the route.
      // You can add your own logic here
      this.id = this.ac.snapshot.params['id'];
    });
  }

  constructor(private ac: ActivatedRoute) {
    this.subscribeRouteChange();
  }

  ngOnInit(): void {}
}
