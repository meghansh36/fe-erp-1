import { Component, OnInit, ViewChild} from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormBuilderComponent } from '@L3Process/system/modules/formBuilder/formBuilder.component';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';

@Component({
  selector: 'tim-input',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css', '../baseField/baseField.component.css']
})
export class FeTimComponent extends FeBaseField implements OnInit {

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
