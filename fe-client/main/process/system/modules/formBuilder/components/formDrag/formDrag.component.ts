import { Component, OnInit, Input  } from '@angular/core';
import { FeFormBuilderService } from '../../services/formBuilder.service';

@Component({
  selector: 'form-drag',
  templateUrl: './form-drag.component.html',
  styleUrls: ['./form-drag.component.css']
})
export class FeFormDragComponent implements OnInit {

  elementList: Object  = null;
  @Input() elementListToLoad: string;

  constructor(private formService: FeFormBuilderService) {
  }
  ngOnInit() {
    this.elementList = this.formService.getElementList(this.elementListToLoad);
   }


}
