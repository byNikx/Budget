import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {

  @Input()
  category: any;
  editing: boolean;
  amt: number;
  d: any;
  constructor() { }

  line_ChartData = [
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', this.amt, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]];


  toggleEdit(): void{
    this.editing = !this.editing;
  }

  isEditing(): boolean{
    return this.editing;
  }

  test(){
    this.line_ChartData = [
          ['Year', 'Sales', 'Expenses'],
          ['2004', 1000, 400],
          ['2005', this.amt, 460],
          ['2006', 660, 1120],
          ['2007', 1030, 540]];
  }
  public line_ChartOptions = {
        height: 240,
        animation:{
          duration: 1000,
          easing: 'out',
        },
        title: 'Company Performance',
        curveType: 'function',
        legend: {
            position: 'bottom'
        },
        backgroundColor:'transparent',
    };


}
