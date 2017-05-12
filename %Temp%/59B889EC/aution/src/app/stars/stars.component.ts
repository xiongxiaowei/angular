import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating=0;
  private stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars=[true,true,true,true,true];
  }

}
