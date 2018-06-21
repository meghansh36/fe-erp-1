import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { RenderService } from '@L3Process/system/modules/formRender/render/services/render.service';
import { AllCompService } from '@L3Process/system/modules/formRender/render/services/all-comp.service';
import { RenderDirective } from '@L3Process/system/modules/formRender/render/render.directive';
import { TXTComponent } from '@L3Process/system/modules/formRender/render/components/TXT/txt.component';
import { BTNComponent } from '@L3Process/system/modules/formRender/render/components/BTN/btn.component';
//import { TextareaComponent } from '@L3Process/system/modules/formRender//components/textarea/textarea.component';

const components = {
  input: TXTComponent,
  button: BTNComponent
};

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
})
export class FeRenderComponent implements OnInit {
  @Input() config: any[] = [];

  @ViewChild(RenderDirective) host: RenderDirective;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  private form: FormGroup;

  private current_component;

  constructor(private formBuilder: FormBuilder, private renderService: RenderService, private allComp: AllCompService, private comFact: ComponentFactoryResolver) { }

  ngOnInit() {
    /*this.renderService.json[0].component.forEach((w) => {
      this.allComp.elements.forEach((e) => {
        if (w.name == e.name) {
          this.current_component = e.component;
          let componentFactory = this.comFact.resolveComponentFactory(this.current_component);
          let compRef = this.vc.createComponent(componentFactory);
          compRef.instance.setProperties(w.property);
        }
      });
    })*/
    this.form = this.createGroup();
    this.config.forEach((ele) => {
      this.allComp.elements.forEach((e) => {
        if (ele.name == e.name) {
          const component = components[this.config[0].name];
          const factory = this.comFact.resolveComponentFactory<any>(component);
          this.current_component = this.vc.createComponent(factory);
          this.current_component.instance.config = ele.property;
          this.current_component.instance.group = this.form;
        }
      });
    });
  }

  createGroup() {
    const group = this.formBuilder.group({});
    this.config.forEach(control => {
      group.addControl(control.property.formcontrol, this.formBuilder.control(''))
    });
    return group;
  }

}
