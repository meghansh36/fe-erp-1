import { Injectable } from '@angular/core';
import { TXTComponent } from '../components/TXT/txt.component';
import { BTNComponent } from '../components/BTN/btn.component';
import { TextareaComponent } from '../components/textarea/textarea.component';

@Injectable({
  providedIn: 'root'
})
export class AllCompService {

  constructor() { }

  public elements = [
    {name:'input' , component: TXTComponent},
    //{name:'textarea' , component: TextareaComponent},
    {name:'button' , component: BTNComponent}
  ]

}
