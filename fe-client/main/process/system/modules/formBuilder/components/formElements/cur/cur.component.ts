import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';

@Component({
  selector: 'cur-input',
  templateUrl: './cur.component.html',
  styleUrls: ['./cur.component.css', '../baseField/baseField.component.css']
})
export class FeCurComponent extends FeBaseField implements OnInit {

  constructor(private fieldControlService: FieldControlService) {
    super();
  }
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }



}
