import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css']
})
export class FeFormsComponent {
  public instance: any;
  public code: string = "FRM0000001";

  constructor(public router: Router, public route: ActivatedRoute) {
    this.instance = this;
  }

  navigate(args: any) {
    let id = args.ID;
    this.navigateToFormGenerator(id);
  }

  navigateToFormGenerator(id: number) {
    this.router.navigate(['/formGenerator', id]);
  }

}
