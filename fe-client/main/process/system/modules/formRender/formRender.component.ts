import { Component, OnInit } from '@angular/core';
import { RenderService } from './render/services/render.service';

@Component({
  selector: 'form-render',
  templateUrl: './formRender.component.html',
  styleUrls: ['./formRender.component.css']
})
export class FeFormRenderComponent implements OnInit {
  private config = [];
  constructor(private renderService: RenderService){}

  ngOnInit() {
    this.config = this.renderService.json[0].component;
  }
}
