import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  cols: string;
  rows: string;
  placeholder: string;
  constructor() { }

  setProperties(props) {
    console.log(props);
    this.placeholder = props.placeholder;
    this.cols = props.col;
    this.rows = props.row;
  }

  ngOnInit() {
  }

}
