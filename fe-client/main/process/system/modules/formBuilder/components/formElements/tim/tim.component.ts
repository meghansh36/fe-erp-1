import { Component, OnInit, ViewChild} from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'tim-input',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css', '../baseField/baseField.component.css']
})
export class FeTimComponent extends FeBaseField implements OnInit {

  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }


}
