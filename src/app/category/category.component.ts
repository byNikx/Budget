import { Component, OnInit, Input } from '@angular/core';
import { BroadcastService } from '../services/broadcast.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [
    BroadcastService
  ]
})
export class CategoryComponent implements OnInit {
  @Input()
  category: any;

  @Input()
  isSelected: boolean = false;
  constructor(private broadcastService: BroadcastService) { }

  handleClick(){
    this.isSelected = !this.isSelected;
  }

  ngOnInit() {
  }

}
