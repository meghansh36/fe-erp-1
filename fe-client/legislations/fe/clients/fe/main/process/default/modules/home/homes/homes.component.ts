import { Component } from '@angular/core';

@Component({
  selector: 'homes-root',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent {
  constructor() {
    console.log('homes');
  }
}
