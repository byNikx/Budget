import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input()
  category: any;

  @Input()
  isSelected: boolean = false;
  constructor() { }

  handleClick(){
    this.isSelected = !this.isSelected;
  }

  ngOnInit() {
  }

}
