import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  categories: any []=[
    {
      name: "Income",
      hasSubCategory: true,
      amount: 33546.00,
      subCategories: [
        {
          name: "Child Support Received",
          hasSubCategory: false,
          amount: 2200.00
        },{
          name: "Employment Related Clothes",
          hasSubCategory: false,
          amount: 1002
        },{
          name: "Employment related expenses",
          hasSubCategory: false,
          amount: 1002
        },{
          name: "Employment Related Gear",
          hasSubCategory: false,
          amount: 1002
        },
      ]
    },{
      name: "Cars & Transportation",
      hasSubCategory: true,
      amount: 33546.00,
      subCategories: [
        {
          name: "Child Support Received",
          hasSubCategory: false,
          amount: 2200.00
        },{
          name: "Employment Related Clothes",
          hasSubCategory: false,
          amount: 1002
        },{
          name: "Employment related expenses",
          hasSubCategory: false,
          amount: 1002
        },{
          name: "Employment Related Gear",
          hasSubCategory: false,
          amount: 1002
        },
      ]
    },{
      name: "Cars & Transportation",
      hasSubCategory: true,
      amount: 33546.00,
      subCategories: [
        {
          name: "Child Support Received",
          hasSubCategory: false,
          amount: 2200.00
        },{
          name: "Employment Related Clothes",
          hasSubCategory: false,
          amount: 1002
        },{
          name: "Employment related expenses",
          hasSubCategory: false,
          amount: 1002
        },{
          name: "Employment Related Gear",
          hasSubCategory: false,
          amount: 1002
        },
      ]
    },
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
