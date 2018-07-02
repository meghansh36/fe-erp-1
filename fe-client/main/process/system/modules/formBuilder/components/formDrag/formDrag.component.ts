import { Component, OnInit, Input  } from '@angular/core';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'form-drag',
  templateUrl: './formDrag.component.html',
  styleUrls: ['./formDrag.component.css'],
})
export class FeFormDragComponent implements OnInit {

  elementList: Object  = null;
  @Input() elementListToLoad: string;

  options = {
    group: {
      name: 'dnd',
      pull: 'clone'
    },
    sort: false,
  };

  constructor(private formService: FormBuilderService) {
    // dragulaService.setOptions('bag-one', {
    //   copy: false,
    //   revertOnSpill: true,
    // });
  }
  ngOnInit() {
    this.elementList = this.formService.getElementList(this.elementListToLoad);
   }

}
