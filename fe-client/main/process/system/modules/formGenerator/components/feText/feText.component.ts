import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl: 'feText.component.html'
})
export class FeTextComponent extends FeBaseComponent {
  public style: any;
  public defaultClasses: any;
/*  <div class="form-group " [formGroup]="group">
    <label for="{{ config.id }}">{{ config.label }}</label>
    <input type="text" class="form-control" [ngClass]="{'is-invalid':group.controls[config.flexiLabel].invalid && (group.controls[config.flexiLabel].dirty || group.controls[config.flexiLabel].touched)}"
        [attr.placeholder]="config.placeholder" [formControlName]="config.flexiLabel" [attr.id]="config.id">
    <div *ngIf="group.controls[config.flexiLabel].errors && (group.controls[config.flexiLabel].dirty || group.controls[config.flexiLabel].touched)">
        <span *ngFor="let err of customVal">
            <small class="text-danger" *ngIf="group.controls[config.flexiLabel].errors[err.name]">
                {{err.message}}
                <br>
            </small>
        </span>
        <span *ngFor="let err of errors">
            <small class="text-danger" *ngIf="group.controls[config.flexiLabel].errors[err.name]">
                {{err.message}}
                <br>
            </small>
        </span>
        <span *ngFor="let err of formClassVal">
            <small class="text-danger" *ngIf="group.controls[config.flexiLabel].errors[err.name]">
                {{err.message}}
            </small>
        </span>
    </div>
</div>*/
}
