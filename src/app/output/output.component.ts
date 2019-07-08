import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() public myOutput = new EventEmitter();


    public buttonClick(): void {
       this.myOutput.emit();
    }




}
